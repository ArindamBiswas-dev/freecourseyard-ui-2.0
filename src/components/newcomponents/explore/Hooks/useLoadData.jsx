import axios from 'axios';
import { useEffect, useState } from 'react'
import { trackPromise } from 'react-promise-tracker';

function useLoadData(url, searchInput) {

    const [courses, setCourses] = useState([]);

    // const [hasMoreCourses, setHasMorecourses] = useState(true);

    useEffect(() => {
        setCourses([])
    }, [searchInput])

    useEffect(() => {

        // console.log(url)
        trackPromise(
            axios.get(url)
                .then(res => {
                    setCourses((prevCourses) => {
                        return [...prevCourses, ...res.data.docs]
                    });
                })
                .catch(err => console.log(err)));

    }, [url])

    return { courses }
}

export default useLoadData