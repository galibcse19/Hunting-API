 const LoadPhone = async (Input) =>{
     
    const res =await fetch(`https://openapi.programming-hero.com/api/phones?search=${Input}`);
    const data = await res.json();
    const phones =data.data;
    displayPhones(phones);
}
const displayPhones = phones =>{
    const Container =document.getElementById('mainContainer');
    Container.textContent='';

    phones.forEach(phone =>{
        console.log(phone);
         const IntoCon= document.createElement('div');
         IntoCon.classList= `card bg-amber-700  shadow-xl `;
         IntoCon.innerHTML=`
                <figure class="px-6 pt-6">
                    <img src="${phone.image}" alt="Shoes"
                        class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                <h2>Brand: ${phone.brand}</h2>
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>${phone.slug}</p>
                    <div class="card-actions">
                        <button class="btn btn-active btn-secondary">Secondary</button>
                    </div>
                </div>
         `;
         Container.appendChild(IntoCon);
     })
}

const SrcNow = () =>{
     const InputField =document.getElementById('inputField');
     const InputData= InputField.value;
     console.log(InputData);
     LoadPhone(InputData);
}

// LoadPhone()
