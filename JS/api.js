 const LoadPhone = async () =>{
    const res =await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones =data.data;
    displayPhones(phones);
}
const displayPhones = phones =>{
    const Container =document.getElementById('mainContainer');
    phones.forEach(phone =>{
        console.log(phone);
         const IntoCon= document.createElement('div');
         IntoCon.classList= `card w-96 bg-base-100 shadow-xl`;
         IntoCon.innerHTML=`
                <figure class="px-10 pt-10">
                    <img src="${phone.image}" alt="Shoes"
                        class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                <h2>Brand: ${phone.brand}</h2>
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>${phone.slug}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
         `;
         Container.appendChild(IntoCon);
     })
}
LoadPhone()
