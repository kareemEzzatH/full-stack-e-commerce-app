import type { Meta } from "./pagination"

export type ApiResponse<T>={
    data:T,
    meta:Meta
}
