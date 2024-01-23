// import Search from "../../components/Search/Search";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
// import Skeleton from "./../../components/Skeleton/Skeleton";
import { useState } from "react";
import Select from "react-select";
// import useAllPublishers from "../../hooks/useAllPublishers";
import { useEffect } from "react";
import Card from "../../../Components/Card/Card";
import Search from "../../../Components/Search/Serach";
import axios from "axios";

const options = [
  { value: "", label: "Bedrooms" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

const All_houses = () => {
  const [options1, setOptions1] = useState();
  useEffect(() => {
    window.document.title = "PrimePress | All Articles";
    axios.get("/city.json").then((res) => {
      const all = [{ value: "", label: "All City" }];
      res.data.map((_, i) => {
        all.push({ value: _.name, label: _.name });
        setOptions1(all);
      });
    });
  }, []);
  console.log(options1);
  //   const { data: publishers } = useAllPublishers();

  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: "Bedrooms",
  });
  const [selectedOption1, setSelectedOption1] = useState({
    value: "",
    label: "All City",
  });

  const [search, setSearch] = useState("");
  const getArticles = async (page) => {
    const res = await fetch(
      `http://localhost:5000/allHouses?limit=10&page=${page}&tags=${selectedOption.value}&publisher=${selectedOption1.value}&search=${search}`
    );
    return res.json();
  };
  const { isPending, data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["infinity", selectedOption, selectedOption1, search],
    queryFn: ({ pageParam = 1 }) => getArticles(pageParam),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length == 10 ? pages.length + 1 : undefined;
    },
  });

  const articles = data?.pages.reduce((acc, page) => {
    return [...acc, ...page];
  }, []);

  const handleSubmit = (e) => {
    console.log(e.target.value);
    setSelectedOption({
      value: "",
      label: "All Tags",
    });
    setSelectedOption1({
      value: "",
      label: "All City",
    });
    setSearch(e.target.value);
  };

  return (
    <>
      <Search handleSubmit={handleSubmit} />
      <div className="flex justify-between items-start">
        <div className="w-56 grid grid-cols-1">
          <div className="grid grid-cols-1 gap-2">
            <Select
              value={selectedOption}
              required
              placeholder="Filter tags"
              onChange={setSelectedOption}
              options={options}
            />
            <Select
              value={selectedOption1}
              required
              placeholder="City"
              onChange={setSelectedOption1}
              options={options1}
            />
          </div>
          <br />
        </div>
        <div className="mx-auto">
          {isPending ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
              {/* <Skeleton />
          <Skeleton /> */}
            </div>
          ) : articles?.length ? (
            <InfiniteScroll
              dataLength={articles ? articles.length : 0}
              next={() => fetchNextPage()}
              hasMore={hasNextPage}
              loader={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
                  {/* <Skeleton />
              <Skeleton /> */}
                </div>
              }
            >
              <div className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {articles?.map((data, inx) => {
                    return <Card data={data} key={inx}></Card>;
                  })}
                </div>
              </div>
            </InfiniteScroll>
          ) : (
            <div className="h-[50vh] w-full flex flex-col justify-center items-center ]">
              <h1 className="text-9xl font-extrabold text-black tracking-widest">
                404
              </h1>
              <div className="bg-sky-400 text-white px-2 text-sm rounded rotate-12 absolute">
                Data Not Found
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default All_houses;
