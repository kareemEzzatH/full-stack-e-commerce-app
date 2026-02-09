import { memo, useEffect, useRef, type ChangeEvent } from "react";
import type { SetURLSearchParams } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { MdKeyboardCommandKey } from "react-icons/md";

type ProductsSearchBarProps = {
  value: string;
  setSearchParams: SetURLSearchParams;
};
const ProductsSearch = memo(
  ({ setSearchParams, value }: ProductsSearchBarProps) => {
    const searchInput = useRef<HTMLInputElement>(null);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        if (e.target.value) {
          params.set("q", e.target.value);
        } else {
          params.delete("q");
        }

        return params;
      });
    };
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
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
            value={value}
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
  }
);

export default ProductsSearch;
