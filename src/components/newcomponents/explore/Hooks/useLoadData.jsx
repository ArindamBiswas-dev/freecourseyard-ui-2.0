import axios from "axios";
import { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";

function useLoadData(url, searchInput) {
  const [courses, setCourses] = useState([]);

  // const [hasMoreCourses, setHasMorecourses] = useState(true);

  useEffect(() => {
    setCourses([]);
  }, [searchInput]);

  useEffect(() => {
    trackPromise(
      axios
        .get(url)
        .then((res) => {
          setCourses((prevCourses) => {
            return [...prevCourses, ...res.data.data];
          });
          //   console.log(res.data.data);
        })
        .catch((err) => console.log(err))
    );
  }, [url]);

  return { courses };
}

export default useLoadData;
