import Chap03 from "./Chap03";

const thuchanh = new Chap03();
// thuchanh.bai1();
// thuchanh.bai2();
// thuchanh.bai5();

const main = (): void => {
  const mainContentElement = document.querySelector("#mainContentId");
  thuchanh.bai5().then((data) => {
    console.log(data);
    for (let i = 9; i <= 20; i++) {
      const random = Math.floor(Math.random() * 10);
      const pokemon = data[random];
      const divElement = document.createElement("div");
      divElement.classList.add(
        "border",
        "border-gray-300",
        "p-1",
        "m-2",
        "shadow",
        "text-center"
      );
      divElement.innerHTML = /*html*/ `
                <div class="flex justify-center">
                    <img src="${pokemon.image}" title="${pokemon.name}" />
                </div>
                <p>${pokemon.name}</p>
            `;
      mainContentElement.appendChild(divElement);
    }
  });
};
main();

// import Tuong from './Chap06/Tuong';
// import TuongPhep from './Chap06/Tuongphep';

// const Vanhei = new Tuong("Vaihe", "tieu sư", "chem gio");
// const Veiga =  new TuongPhep("Veiga", "Samurai", "Chém gió", 200, 100, "Thiên thạch");
// Vanhei.showInfo();
// Veiga.showInfo();

// import Department from './Chap07/index';

// const oto = new Department("aaa", "bbbb");
// console.log(oto);

// import Product from "./Chap08/index";

// const iphone = new Product<number, string, number>(1, "iphone 12", 200)
// console.log(iphone.showInfor());
