// 여기에 1번 문제의 답을 작성하세요.

const get = async() => {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json();
  console.log(data)
}

get();

// 여기에 2번 문제의 답을 작성하세요.
const get1 = async() => {
  const test = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
      /* other product data */
    })
  })
  const res = await test.json()
  console.log(res)
}

get1();