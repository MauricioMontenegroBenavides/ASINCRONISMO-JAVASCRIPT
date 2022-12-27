
import fetch from "node-fetch";

const API="https://api.escuelajs.co/api/v1";

async function fetchdata (urlapi){
    const res=await fetch(urlapi)
    const res2= await res.json();
    return res2;
}

async function resolver(){
    const p=await fetchdata(`${API}/products`);
    const p2=await fetchdata(`${API}/products/${p[0].id}`);
    const p3=await fetchdata(`${API}/categories/${p2.category.id}`);
    console.log(p2);
    console.log(p2.title);
    console.log(p3.name);
}
resolver();

