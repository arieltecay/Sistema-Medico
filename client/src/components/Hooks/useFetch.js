import {useState, useEffect} from 'react'
const useFectch = url =>{
  const [input, setInput] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setInput(data);
      });
  }, [url]);
  return {input, setInput}
}
export default useFectch