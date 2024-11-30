function createNav() {

    const sidenav = document.createElement('div');
    sidenav.id = 'mySidenav';
    sidenav.className = 'sidenav';

// Create the close button
    const closebtn = document.createElement('a');
    closebtn.href = 'javascript:void(0)';
    closebtn.className = 'closebtn';
    closebtn.innerHTML = '&times;';
    closebtn.onclick = () => closeNav();
    sidenav.appendChild(closebtn);

// Create the links for the sidenav
    const links = ['صفحه اصلی', 'فروشگاه', 'مقالات', 'تماس با ما', 'درباره ما'];
    links.forEach(text => {
        const link = document.createElement('a');
        link.href = '#';
        link.innerHTML = text;
        sidenav.appendChild(link);
    });

// Append sidenav to body
    document.body.appendChild(sidenav);

// Create the parent div
    const parentDiv = document.createElement('div');
    parentDiv.className = 'parent';

    const hamburgerIcon = document.createElement('span');
    hamburgerIcon.style.fontSize = '30px';
    hamburgerIcon.style.cursor = 'pointer';
    hamburgerIcon.innerHTML = '&#9776;';
    hamburgerIcon.onclick = () => openNav();

// Create the logo container
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';

// Create logo image
    const logoImg = document.createElement('img');
    logoImg.style.width = '35px';
    logoImg.style.height = '20px';
    logoImg.src = 'img/logo/logo.png';
    logoImg.alt = 'Logo';

// Create the logo text
    const logoText = document.createElement('h2');
    logoText.innerHTML = 'کافئین';

// Append logo image and text to logoDiv
    logoDiv.appendChild(logoImg);
    logoDiv.appendChild(logoText);

// Add the logo and hamburger icon to parent div
    parentDiv.appendChild(hamburgerIcon);
    parentDiv.appendChild(logoDiv);

// Create shopping cart icon
    const cartIcon = document.createElement('i');
    cartIcon.className = 'fa fa-shopping-cart';
    cartIcon.style.fontSize = '20px';

// Append the cart icon to parent div
    parentDiv.appendChild(cartIcon);

// Append parent div to body
    root.appendChild(parentDiv);

    function openNav() {
        document.getElementById('mySidenav').style.width = '250px';
    }

    function closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
}

createNav();


function createSliderShow() {
    const imagesSlider = ["img/slider/slide-1.png", "img/slider/slide-2.png", "img/slider/slide-3.png"];

    const textHeader = "دانه قهوه اسپرسو جیورنو";
    const textTitle = "یک طعم باور نکردی!";
    const textParagraph = "قطعا نام اشنای جسورنو را شنیده اید و جیورنو یکی از گونه‌های قهوه است که در نواحی مختلف کمربند قهوه کشت می‌شود.";
    const buttonText = "مشاهده فروشگاه";

    let currentIndex = 0;
    const intervalTime = 3000;

    const container = document.createElement('div');
    container.className = 'slider-container';
    container.className = 'slider-container';
    container.style.marginTop = '5px';

    const imageElement = document.createElement('img');
    imageElement.className = 'slider-image';

    const prevButton = document.createElement('button');
    prevButton.className = 'nav-button prev-button';
    prevButton.innerHTML = "&laquo;";

    const nextButton = document.createElement('button');
    nextButton.className = 'nav-button next-button';
    nextButton.innerHTML = "&raquo;";

    const headerElement = document.createElement('h1');
    headerElement.textContent = textHeader;

    const titleElement = document.createElement('h3');
    titleElement.textContent = textTitle;

    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = textParagraph;

    const actionButton = document.createElement('button');
    actionButton.textContent = buttonText;

    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';
    contentContainer.appendChild(headerElement);
    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(paragraphElement);
    contentContainer.appendChild(actionButton);


    function showImage() {
        imageElement.src = imagesSlider[currentIndex];
        if (currentIndex === 0) {
            contentContainer.style.display = 'flex';
        } else {
            contentContainer.style.display = 'none';
        }
    }

    prevButton.onclick = () => {
        currentIndex = (currentIndex - 1 + imagesSlider.length) % imagesSlider.length;
        showImage();
        resetTimer();
    };

    nextButton.onclick = () => {
        currentIndex = (currentIndex + 1) % imagesSlider.length;
        showImage();
        resetTimer();
    };

    let timer;

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            nextButton.click();
        }, intervalTime);
    }

    container.appendChild(imageElement);
    container.appendChild(contentContainer);
    container.appendChild(prevButton);
    container.appendChild(nextButton);
    root.appendChild(container);

    showImage();
    resetTimer();
}


createSliderShow();


function createImagesWithTitles(images1, container1) {
    const header3 = document.createElement('div');
    header3.innerHTML = '<h1>محبوب ترین دسته ها</h1>';
    header3.style.display = 'flex';
    header3.style.justifyContent = 'center';
    header3.style.alignItems = 'center';
    header3.style.height = '100px';

    const wrapper1 = document.createElement('div');
    wrapper1.style.display = 'flex';
    wrapper1.style.flexWrap = 'wrap';
    wrapper1.style.justifyContent = 'center';


    images1.forEach(({src, title}) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.style.marginRight = '20px';
        const img = document.createElement('img');
        img.src = src;
        img.alt = title;
        img.style.maxWidth = '200';
        img.style.height = 'auto';

        const imgTitle = document.createElement('b');
        imgTitle.textContent = title;
        imgTitle.style.display = 'flex';
        imgTitle.style.flexWrap = 'wrap';
        imgTitle.style.justifyContent = 'center';

        // imgTitle.style.justifyContent = 'center';
        // imgTitle.style.alignItems = 'center';

        imageWrapper.appendChild(img);
        imageWrapper.appendChild(imgTitle);
        wrapper1.appendChild(imageWrapper);

    });
    container1.appendChild(header3);

    container1.appendChild(wrapper1);

}

const images1 = [{
    src: 'img/categories/category1.png',
    title: 'قهوه دمی و اسپرسو'
}, {src: 'img/categories/category2.png', title: 'لوازم جانبی و تجهیزات'}, {
    src: 'img/categories/category3.png',
    title: 'اسپرسو ساز'
}, {src: 'img/categories/category4.png', title: 'پک تستر قهوه'}, {
    src: 'img/categories/category5.png',
    title: 'قهوه ترک'
}];

const container1 = document.body;
createImagesWithTitles(images1, container1);


function createImagesWithText(images2, container2) {
    const wrapper2 = document.createElement('div');

    wrapper2.style.display = 'flex';
    wrapper2.style.flexWrap = 'wrap';

    wrapper2.style.justifyContent = 'center';
    wrapper2.style.alignItems = 'center';

    images2.forEach(({src, text}) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.style.margin = '30px';
        imageWrapper.style.position = 'relative';

        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Image';
        img.style.maxWidth = '450px';
        img.style.height = 'auto';

        const imageText = document.createElement('div');
        imageText.textContent = text;
        imageText.style.position = 'absolute';
        imageText.style.top = '50%';
        imageText.style.left = '50%';
        imageText.style.transform = ' translate(-50%, -50%)';


        imageText.style.color = 'white';
        imageText.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        imageText.style.padding = '5px';
        imageText.style.borderRadius = '5px';
        imageWrapper.appendChild(img);
        imageWrapper.appendChild(imageText);
        wrapper2.appendChild(imageWrapper);
    });

    container2.appendChild(wrapper2);
}

const images2 = [{
    src: 'img/categories/category-left.jpg',
    text: 'نسکفه , هات چاکلت, ماسالا'
}, {src: 'img/categories/category-right.jpg', text: 'ترکیبی و تک خواستگاه'}];
const container2 = document.body;
createImagesWithText(images2, container2);




const sliderImages1 = [
    {
    image: ' img/products/p1.png',
    description: 'دانه قهوه اسپرسو یونیکا مقدار 250 گرم خط دوم طولانی',
    price: '80,0000 تومان'
}, {
    image: 'img/products/p2.png',

    description: 'قهوه ترک گرمی مقدار 200 گرم رنگ بنفش خط دوم طولانی ', price: '340,0000 تومان'
}, {
    image: 'img/products/p3.png', description: 'قهوه ترک گرمی مقدار 200 گرم رنگ بنفش خط دوم طولانی',

    price: '200,0000 تومان'
}, {
    image: 'img/products/p4.png',
    description: '                                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی خط دوم طولانی',
    price: '154,0000 تومان'
}, {
    image: 'img/products/p5.png',
    description: '                                دانه قهوه اسپرسو کد 200 مقدار 100 گرم خط دوم طولانی',
    price: '80,0000 تومان'
}, {
    image: 'img/products/p6.png',
    description: '    قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی خط دوم طولانی',
    price: 'فعلا موجود نیست'
}

    , {
        image: 'img/products/p7.png', description: ' قهوه ترک گرمی مقدار 200 گرم رنگ بنفش خط دوم طولانی',

        price: '230,0000 تومان'
    }

    , {
        image: 'img/products/p8.png',
        description: '  پودر قهوه اسپرسو آرتیمان مقدار 250 گرم خط دوم طولانی',
        price: 'فعلا موجود نیست'
    }


];

function productSlider1() {
    const container3 = document.createElement('div');
    const swiperContainer = document.createElement('div');
    const header4 = document.createElement('div');
    header4.innerHTML = '<h2>جدیدترین محصولات</h2>';
    header4.style.display = 'flex';
    header4.style.justifyContent = 'center';
    header4.style.alignItems = 'center';
    header4.style.height = '100px';
    container3.appendChild(header4);
    swiperContainer.classList.add('swiper', 'mySwiper');

    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper');

    const swiperPagination = document.createElement('div');
    swiperPagination.classList.add('swiper-pagination');


    sliderImages1.forEach(({image, title, description, price}) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        const img = document.createElement('img');
        img.src = image;
        img.alt = title;



        const productDescription = document.createElement('div');
        productDescription.textContent = description;

        const productPrice = document.createElement('div');
        productPrice.textContent = price;
        productPrice.style.color = 'green';
        productPrice.style.paddingBottom = '10px';

        slide.appendChild(img);
        slide.appendChild(productDescription);
        slide.appendChild(productPrice);
        swiperWrapper.appendChild(slide);
    });

    swiperContainer.appendChild(swiperWrapper);
    swiperContainer.appendChild(swiperPagination);

    container3.appendChild(swiperContainer);
    document.body.appendChild(container3);

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto', spaceBetween: 30, freeMode: true,

        breakpoints: {
            320: {
                slidesPerView: 2,
            }, 640: {
                slidesPerView: 3,
            }, 768: {
                slidesPerView: 4,
            }, 1024: {
                slidesPerView: 5,
            },
        },
    });


    let currentIndex = 0;
    const totalSlides = sliderImages1.length;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        swiper.slideTo(currentIndex);
    }, 3000);

}

productSlider1()


// const sliderImages2 = [
//     {
//         image: ' img/products/p1.png',
//         description: 'دانه قهوه اسپرسو یونیکا مقدار 250 گرم خط دوم طولانی',
//         price: '80,0000 تومان'
//     }, {
//         image: 'img/products/p2.png',
//
//         description: 'قهوه ترک گرمی مقدار 200 گرم رنگ بنفش خط دوم طولانی ', price: '340,0000 تومان'
//     }, {
//         image: 'img/products/p3.png', description: 'قهوه ترک گرمی مقدار 200 گرم رنگ بنفش خط دوم طولانی',
//
//         price: '200,0000 تومان'
//     }, {
//         image: 'img/products/p4.png',
//         description: '                                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی خط دوم طولانی',
//         price: '154,0000 تومان'
//     }, {
//         image: 'img/products/p5.png',
//         description: '                                دانه قهوه اسپرسو کد 200 مقدار 100 گرم خط دوم طولانی',
//         price: '80,0000 تومان'
//     }, {
//         image: 'img/products/p6.png',
//         description: '    قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی خط دوم طولانی',
//         price: 'فعلا موجود نیست'
//     }
//
//     , {
//         image: 'img/products/p7.png', description: ' قهوه ترک گرمی مقدار 200 گرم رنگ بنفش خط دوم طولانی',
//
//         price: '230,0000 تومان'
//     }
//
//     , {
//         image: 'img/products/p8.png',
//         description: '  پودر قهوه اسپرسو آرتیمان مقدار 250 گرم خط دوم طولانی',
//         price: 'فعلا موجود نیست'
//     }
//
//
// ];
// function productSlider2() {
//     const container3 = document.createElement('div');
//     const swiperContainer = document.createElement('div');
//     const header4 = document.createElement('div');
//     header4.innerHTML = '<h2>جدیدترین محصولات</h2>';
//     header4.style.display = 'flex';
//     header4.style.justifyContent = 'center';
//     header4.style.alignItems = 'center';
//     header4.style.height = '100px';
//     container3.appendChild(header4);
//     swiperContainer.classList.add('swiper', 'mySwiper');
//
//     const swiperWrapper = document.createElement('div');
//     swiperWrapper.classList.add('swiper-wrapper');
//
//     const swiperPagination = document.createElement('div');
//     swiperPagination.classList.add('swiper-pagination');
//
//
//     sliderImages2.forEach(({image, title, description, price}) => {
//         const slide = document.createElement('div');
//         slide.classList.add('swiper-slide');
//
//         const img = document.createElement('img');
//         img.src = image;
//         img.alt = title;
//
//
//
//         const productDescription = document.createElement('div');
//         productDescription.textContent = description;
//
//         const productPrice = document.createElement('div');
//         productPrice.textContent = price;
//         productPrice.style.color = 'green';
//         productPrice.style.paddingBottom = '10px';
//
//         slide.appendChild(img);
//         slide.appendChild(productDescription);
//         slide.appendChild(productPrice);
//         swiperWrapper.appendChild(slide);
//     });
//
//     swiperContainer.appendChild(swiperWrapper);
//     swiperContainer.appendChild(swiperPagination);
//
//     container3.appendChild(swiperContainer);
//     document.body.appendChild(container3);
//
//     var swiper = new Swiper(".mySwiper", {
//         slidesPerView: 'auto', spaceBetween: 30, freeMode: true,
//
//         breakpoints: {
//             320: {
//                 slidesPerView: 2,
//             }, 640: {
//                 slidesPerView: 3,
//             }, 768: {
//                 slidesPerView: 4,
//             }, 1024: {
//                 slidesPerView: 5,
//             },
//         },
//     });
//
//
//     let currentIndex = 0;
//     const totalSlides = sliderImages2.length;
//
//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         swiper.slideTo(currentIndex);
//     }, 3000);
//
// }
//
// productSlider2()


const products = [
    {
    image: 'img/articles/a-1.jpg',
    title: 'کشف دنیای قهوه',
    description: 'از دانه تا فنجان: فرآیند تولید قهوه از کاشت دانه‌های قهوه تا دم‌آوری نهایی، تمام مراحل تولید قهوه را بشناسید و لذت ببرید...',
    rate: '120',
    calender: '1403/5/1'


}, {
    image: 'img/articles/a-2.jpg',
    title: ' سفر به مزارع قهوه',
    description: 'گزارش‌هایی از بهترین مزارع قهوه جهان به دنیای مزارع قهوه سفر کنید و با داستان‌های جالب و...',
    rate: '440',
    calender: '1403/5/1'


}, {
    image: 'img/articles/a-3.jpg',
    title: 'رازهای تهیه قهوه',
    description: 'نکات و ترفندهای باریستاهای حرفه‌ای با ترفندهای حرفه‌ای باریستاها آشنا شوید و قهوه‌ای...',
    rate: '89',
    calender: '1403/5/1'


},

    {
        image: 'img/articles/a-4.jpg',
        title: 'شناخت انواع قهوه',
        description: 'آشنایی با انواع دانه‌ها و روش‌های دم‌آوری از انواع مختلف دانه‌های قهوه تا روش‌های متنوع..',
        rate: '540',
        calender: '1403/5/1'

    }];

function readingItem() {

    const container4 = document.createElement('div');
    const itemImg = document.createElement('div');

    itemImg.style.display = 'flex';
    itemImg.style.flexWrap = 'wrap';
    itemImg.style.justifyContent = 'center';
    itemImg.style.alignItems = 'center';

    const header5 = document.createElement('div');
    header5.innerHTML = '<h3>مطالب خواندنی</h3>';
    header5.style.display = 'flex';
    header5.style.justifyContent = 'center';
    header5.style.alignItems = 'center';
    header5.style.height = '100px';


    products.forEach(product => {
        const box = document.createElement('div');
        box.style.border = '1px solid #fff';
        box.style.padding = '10px';
        box.style.margin = '10px';
        box.style.width = '300px';
        box.style.backgroundColor = '#fff';
        box.style.display = 'flex';
        box.style.flexDirection = 'column';
        box.style.borderRadius = '5px';

        box.style.alignItems = 'center';
        box.style.justifyContent = 'center';


        const img = document.createElement('img');
        img.src = product.image;
        img.style.width = '250px';
        img.style.height = '200px';
        img.style.boxShadow = '0 0 5px  #333';
        img.style.borderRadius = '10px 30px';

        img.style.marginBottom = '20px';


        const title = document.createElement('b');
        title.textContent = product.title;

        const description = document.createElement('p');
        description.textContent = product.description;
        description.style.marginTop = '20px';

        const footerPruduct = document.createElement('div');
        footerPruduct.style.display = 'flex';
        footerPruduct.style.justifyContent = 'space-between';
        footerPruduct.style.alignItems = 'space-between';
        footerPruduct.style.width = '100%';
        footerPruduct.style.marginTop = '10px';


        footerPruduct.innerHTML = '<i class="fa-solid fa-calendar-days"></i>' + product.rate + product.calender + '<i class="fa-solid fa-eye "></i>';


        box.appendChild(img);
        box.appendChild(title);
        box.appendChild(description);
        itemImg.appendChild(box);
        box.appendChild(footerPruduct);

        container4.appendChild(header5)


    });

    container4.appendChild(itemImg);

    document.body.appendChild(container4);
}

readingItem();


function footerPage() {
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#2c2a2a';
    footer.style.display = 'flex';
    footer.style.flexWrap = 'wrap';
    footer.style.padding = '20px';
    footer.style.position = 'relative';
    footer.style.width = '100%';
    footer.style.height = '400px';


    const wrapper1 = document.createElement('div');
    wrapper1.style.justifyContent = 'space-between';
    // wrapper1.style.alignItems = 'center';
    wrapper1.style.flexWrap = 'wrap';
    wrapper1.style.padding = '20px';
    wrapper1.style.display = 'flex';

    wrapper1.style.width = '100%';
    wrapper1.style.height = '100px';

    const footerSearch = document.createElement('div');
    footerSearch.innerHTML = '<input style="width: 300px; padding:  10px; margin-left:10px;border-radius: 10px" type="text" placeholder="ایمیل یا شماره تلفن همراه">' + '<button style=" color: #F5F5F5; background-color:  forestgreen;padding:  10px   15px;border: none; border-radius: 10px">ثبت</button>'
    footerSearch.style.color = '#fff';






// Create footer content
    const footerBtn = document.createElement('a');
    footerBtn.innerHTML = '<button  id="myBtn" style="color: #fff; background-color: inherit; border: 1px solid white; border-radius: 5px; padding: 8px;" >بازگشت به بالا</button>';
    //
    // let mybutton = document.getElementById("myBtn");
    // function topFunction(mybutton) {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }
    //
    // topFunction(mybutton)
    const wrapper2 = document.createElement('div');
    wrapper2.style.flexWrap = 'wrap';
    wrapper2.style.display = 'flex';
// wrapper2.style.backgroundColor='red';
    wrapper2.style.width = '100%';
    wrapper2.style.height = '250px';

    const box1 = document.createElement('div');
    box1.style.marginRight = '20px';
    box1.style.flexWrap = 'wrap';
    box1.style.display = 'flex';
    // box1.style.backgroundColor='blue';
    box1.style.width = '300px';
    box1.style.color = '#fff';

    const textContent1 = document.createElement('یهر');
    const parent1 = document.createElement('div');
    parent1.style.display = 'flex';

    parent1.style.height = '250px';
    parent1.style.width = '300px';

    // parent1.style.backgroundColor='red';
    parent1.style.alignItems = 'center';
    parent1.style.justifyContent = 'center';
    parent1.innerHTML = 'در فروشگاه آنلاین ما، بهترین دانه‌های قهوه از سراسر جهان را با کیفیت بالا و طعمی بی‌نظیر برای شما فراهم آورده‌ایم. با انتخاب محصولات ما، لذت یک فنجان قهوه عالی را در خانه تجربه کنید.';
    textContent1.style.color = '151515FF';

    const box2 = document.createElement('div');
    box2.style.marginRight = '20px';
    box2.style.flexWrap = 'wrap';
    box2.style.display = 'flex';
    // box2.style.backgroundColor='blue';
    box2.style.width = '300px';

    box2.style.color = '#fff';


    const textContent2 = document.createElement('div');
    const parent2 = document.createElement('div');
    parent2.style.display = 'flex';

    parent2.style.height = '250px';
    parent2.style.width = '300px';

    // wraper.style.backgroundColor='red';
    parent2.style.alignItems = 'center';
    parent2.style.justifyContent = 'center';


    parent2.innerHTML = `
   <div>
     <b >سترسی سریع-</b>

  <p >صفحه اصلی</p>
   <p >فروشگاه</p>
   <p >تماس با ما</p>
   <label >سوالات متداول</label>
   </div>
  
   <div>
   <p >ثبت نام | ورود</p>
   <p >وبلاگ</p>
   <p >حریم خصوصی </p>
   </div>
   
 `
    box2.style.color = '151515FF';

    const box3 = document.createElement('div');
    box3.style.marginRight = '20px';
    box3.style.flexWrap = 'wrap';
    box3.style.display = 'flex';
    box3.style.color = '#fff';

    // box3.style.backgroundColor='blue';
    box3.style.width = '300px';


    const textContent3 = document.createElement('div');
    const parent3 = document.createElement('div');
    parent3.style.display = 'flex';

    parent3.style.height = '250px';
    parent3.style.width = '300px';

    // wraper.style.backgroundColor='red';
    parent3.style.alignItems = 'center';
    parent3.style.justifyContent = 'center';
    parent3.innerHTML = `
 <div>
     <b >تماس با ما-</b>
     
     
     
  <p><i class=" fa fa-location-arrow "></i>
  
بلوار آزادی، خیابان استاد معین، کوچه گلستان، پلاک ۱۰
</p>
  
  <p>
  <i class=" fa fa-phone "></i>   0923-122-3311

 <i class=" fa  fa-envelope "></i> coffein@info.com

  </p>




<p>
<i class=" fa-brands fa-telegram " style="color: #74C0FC"></i>
@coffeepages 
<i class=" fa-brands fa-instagram" style="color: #ff0000" > </i>
coffeepages
</p>
   </div>


`

    box2.style.color = '151515FF';

    document.body.appendChild(footer);
    footer.appendChild(wrapper1);
    footer.appendChild(wrapper2);
    wrapper1.appendChild(footerSearch);
    wrapper1.appendChild(footerBtn);
    wrapper2.appendChild(box1)
    box1.appendChild(textContent1)
    textContent1.appendChild(parent1)

    wrapper2.appendChild(box2)
    box2.appendChild(textContent2)
    textContent2.appendChild(parent2)

    wrapper2.appendChild(box3)
    box3.appendChild(textContent3)
    textContent3.appendChild(parent3)

}

footerPage();


