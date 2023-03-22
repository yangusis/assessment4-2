const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const flowerPut = document.getElementById("flowerBox");
const keywordStorage = document.getElementById("keyword");
const deleteBtn = document.getElementById("delete");

const keywordValue = document.getElementById("keywordValue");
const flowerValue = document.getElementById("flowerValue");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

// flower still not working entirely correctly
const putFlower = () => {
  const data = {
    text: flowerValue.value,
  };

  axios.put("http://localhost:4000/api/flower", flowerValue).then((res) => {
    const data = res.data;
    alert(data);
  });
};

const addKeyword = () => {
  const data = {
    text: keywordValue.value,
  };

  axios.post("http://localhost:4000/api/keyword", data).then((res) => {
    const data = res.data;
    alert("Keyword added");
  });
};

const deleteKeyword = () => {
  axios.delete("http://localhost:4000/api/keyword").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
keywordStorage.addEventListener("click", addKeyword);
flowerPut.addEventListener("click", putFlower);
deleteBtn.addEventListener("click", deleteKeyword);
