import { Input } from "@mantine/core";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import * as v from "valibot";

const Category = v.union([v.literal("electronics"), v.literal("clothing"), v.literal("books")]);

const ItemFilters = v.object({
    query: v.optional(v.string()),
    hasDiscount: v.optional(v.boolean()),
    categories: v.optional(v.array(Category)),
});

type ItemFilters = v.InferInput<typeof ItemFilters>;

export const Route = createFileRoute("/search")({
    validateSearch: (search) => v.parse(ItemFilters, search),
    component: RouteComponent,
});

function RouteComponent() {
    const navigate = useNavigate({ from: Route.fullPath });
    const { query = "", hasDiscount, categories } = Route.useSearch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        navigate({ search: (prev) => ({ ...prev, query: e.target.value }) });
    };
    return (
        <div>
            <Input value={query} onChange={handleChange} />
            <pre>
                {JSON.stringify({
                    query,
                    hasDiscount,
                    categories,
                })}
            </pre>
        </div>
    );
}
