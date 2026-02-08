import { memo, useEffect, useRef, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { MdKeyboardCommandKey } from "react-icons/md";

type ProductsSearchBarProps = {
  onChange: (val: string) => void;
};
const ProductsSearch = memo(({ onChange }: ProductsSearchBarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInput = useRef<HTMLInputElement>(null);
  const inputValue = searchParams.get("q");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: e.target.value });
    onChange(e.target.value);
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        searchInput.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="flex justify-center ">
      <InputGroup className=" w-[50%]">
        <InputGroupInput
          placeholder="Search products..."
          value={inputValue ?? ""}
          onChange={handleInput}
          ref={searchInput}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end" className=" gap-0">
          <MdKeyboardCommandKey />K
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
});

export default ProductsSearch;
