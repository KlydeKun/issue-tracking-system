import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: Readonly<{
  searchParams: { page: string };
}>) {
  return (
    <div>
      <Pagination
        itemCount={100}
        pageSize={10}
        currentPage={parseInt(searchParams.page)}
      />
    </div>
  );
}
