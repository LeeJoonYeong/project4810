const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(document).ready(function() {

  // 하나더
  const plusOne = [
    {
    "id": 1,
    "brand": "크리넥스",
    "title": "크리넥스 3겹 순수소프트 내추럴 30팩크리넥스 3겹 순수소프트 내추럴 30팩",
    "isDiscounted": true,
    "couponPrice": "291,200원",
    "discountPercent": "75%",
    "resultPrice": "69,890",
    "imgSrc": "smile_fresh_item_01.jpg",
    "imgAlt": "크리넥스 휴지 상품 이미지",
    },
    {
    "id": 2,
    "brand": "백설",
    "title": "CJ 다담 순두부 찌개 양념 140g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "2,380",
    "imgSrc": "smile_fresh_item_02.jpg",
    "imgAlt": "CJ 다담 순두부 찌개 상품 이미지",
    },
    {
    "id": 3,
    "brand": "백설",
    "title": "다담 된장찌개 양념 500g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "6,980",
    "imgSrc": "smile_fresh_item_01.jpg",
    "imgAlt": "백설 다담 된장찌개 상품 이미지",
    },
    {
    "id": 4,
    "brand": "비비고",
    "title": "CJ 비비고 소고기듬뿍 설렁탕 460g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "6,980",
    "imgSrc": "smile_fresh_item_02.jpg",
    "imgAlt": "CJ 비비고 소고기듬뿍 설렁탕 상품 이미지",
    },
    {
    "id": 5,
    "brand": "차오차이",
    "title": "차오차이 130직화간짜장 180g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "3,980",
    "imgSrc": "smile_fresh_item_01.jpg",
    "imgAlt": "차오차이 130직화간짜장 상품 이미지",
    },
    {
    "id": 6,
    "brand": "비비고",
    "title": "비비고 비비고물만두 315g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "6,980",
    "imgSrc": "smile_fresh_item_02.jpg",
    "imgAlt": "비비고 비비고물만두 상품 이미지",
    },
  ];

  // 전단상품
  const shearingGoods = [
    {
    "id": 7,
    "brand": "크리넥스",
    "title": "크리넥스 3겹 순수소프트 내추럴 30팩크리넥스 3겹 순수소프트 내추럴 30팩",
    "isDiscounted": true,
    "couponPrice": "291,200원",
    "discountPercent": "75%",
    "resultPrice": "69,890",
    "imgSrc": "smile_fresh_item_03.jpg",
    "imgAlt": "크리넥스 휴지 상품 이미지",
    },
    {
    "id": 8,
    "brand": "백설",
    "title": "CJ 다담 순두부 찌개 양념 140g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "2,380",
    "imgSrc": "smile_fresh_item_04.jpg",
    "imgAlt": "CJ 다담 순두부 찌개 상품 이미지",
    },
    {
    "id": 9,
    "brand": "백설",
    "title": "다담 된장찌개 양념 500g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "6,980",
    "imgSrc": "smile_fresh_item_03.jpg",
    "imgAlt": "백설 다담 된장찌개 상품 이미지",
    },
    {
    "id": 10,
    "brand": "비비고",
    "title": "CJ 비비고 소고기듬뿍 설렁탕 460g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "6,980",
    "imgSrc": "smile_fresh_item_04.jpg",
    "imgAlt": "CJ 비비고 소고기듬뿍 설렁탕 상품 이미지",
    },
    {
    "id": 11,
    "brand": "차오차이",
    "title": "차오차이 130직화간짜장 180g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "3,980",
    "imgSrc": "smile_fresh_item_03.jpg",
    "imgAlt": "차오차이 130직화간짜장 상품 이미지",
    },
    {
    "id": 12,
    "brand": "비비고",
    "title": "비비고 비비고물만두 315g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "6,980",
    "imgSrc": "smile_fresh_item_04.jpg",
    "imgAlt": "비비고 비비고물만두 상품 이미지",
    },
  ];

  // 오반장
  const ohvanjang = [
    {
    "id": 13,
    "brand": "크리넥스",
    "title": "크리넥스 3겹 순수소프트 내추럴 30팩크리넥스 3겹 순수소프트 내추럴 30팩",
    "isDiscounted": true,
    "couponPrice": "291,200원",
    "discountPercent": "75%",
    "resultPrice": "69,890",
    "imgSrc": "smile_fresh_item_05.jpg",
    "imgAlt": "크리넥스 휴지 상품 이미지",
    },
    {
    "id": 14,
    "brand": "백설",
    "title": "CJ 다담 순두부 찌개 양념 140g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "2,380",
    "imgSrc": "smile_fresh_item_06.jpg",
    "imgAlt": "CJ 다담 순두부 찌개 상품 이미지",
    },
    {
    "id": 15,
    "brand": "백설",
    "title": "다담 된장찌개 양념 500g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "6,980",
    "imgSrc": "smile_fresh_item_05.jpg",
    "imgAlt": "백설 다담 된장찌개 상품 이미지",
    },
    {
    "id": 16,
    "brand": "비비고",
    "title": "CJ 비비고 소고기듬뿍 설렁탕 460g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "6,980",
    "imgSrc": "smile_fresh_item_06.jpg",
    "imgAlt": "CJ 비비고 소고기듬뿍 설렁탕 상품 이미지",
    },
    {
    "id": 17,
    "brand": "차오차이",
    "title": "차오차이 130직화간짜장 180g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "3,980",
    "imgSrc": "smile_fresh_item_05.jpg",
    "imgAlt": "차오차이 130직화간짜장 상품 이미지",
    },
    {
    "id": 18,
    "brand": "비비고",
    "title": "비비고 비비고물만두 315g",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "6,980",
    "imgSrc": "smile_fresh_item_06.jpg",
    "imgAlt": "비비고 비비고물만두 상품 이미지",
    },
  ];

  // 베스트
  const best = [
    {
    "id": 19,
    "brand": "",
    "title": "신라면 10입 + 안성탕면 5일 + 너구리 5일 + 짜파게티 4입",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "26,710",
    "imgSrc": "smile_delivery_item_01.jpg",
    "imgAlt": "신라면 10입+ 안성탕면 5일 + 너구리 5일 + 짜파게티 4입 상품 이미지",
    },
    {
    "id": 20,
    "brand": "농심",
    "title": "새우깡 8봉 + 매운새우깡 8봉",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "20,500",
    "imgSrc": "smile_delivery_item_02.jpg",
    "imgAlt": "농심 새우깡 8봉 + 매운새우깡 8봉 상품 이미지",
    },
    {
    "id": 21,
    "brand": "농심",
    "title": "신라면+튀김우동+새우탕+오짬뽕 6입4개(총24개)",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "25,200",
    "imgSrc": "smile_delivery_item_03.jpg",
    "imgAlt": "신라면+튀김우동+새우탕+오짬뽕 6입4개 상품 이미지",
    },
    {
    "id": 22,
    "brand": "일리윤",
    "title": "일리윤 세라마이드 아토로션 528ml 2개 + 증정품",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "43,000",
    "imgSrc": "smile_delivery_item_01.jpg",
    "imgAlt": "일리윤 세라마이드 아토로션 528ml 2개 + 증정품 상품 이미지",
    },
    {
    "id": 23,
    "brand": "농심",
    "title": "신라면 5봉 + 너구리 5봉 + 짜파게티 5봉 + 오징어짬뽕 4입",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "22,200",
    "imgSrc": "smile_delivery_item_02.jpg",
    "imgAlt": "신라면 5봉 + 너구리 5봉 + 짜파게티 5봉 + 오징어짬뽕 4입 상품 이미지",
    },
    {
    "id": 24,
    "brand": "웰치스",
    "title": "웰치스 제로 그레이프+체리스트로베리+샤인",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "23,000",
    "imgSrc": "smile_delivery_item_03.jpg",
    "imgAlt": "웰치스 제로 그레이프+체리스트로베리+샤인 상품 이미지",
    },
  ];

  // 무료배송
  const freeDelivery= [
    {
    "id": 25,
    "brand": "",
    "title": "신라면 10입 + 안성탕면 5일 + 너구리 5일 + 짜파게티 4입",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "26,710",
    "imgSrc": "smile_delivery_item_04.jpg",
    "imgAlt": "신라면 10입+ 안성탕면 5일 + 너구리 5일 + 짜파게티 4입 상품 이미지",
    },
    {
    "id": 26,
    "brand": "농심",
    "title": "새우깡 8봉 + 매운새우깡 8봉",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "20,500",
    "imgSrc": "smile_delivery_item_05.jpg",
    "imgAlt": "농심 새우깡 8봉 + 매운새우깡 8봉 상품 이미지",
    },
    {
    "id": 27,
    "brand": "농심",
    "title": "신라면+튀김우동+새우탕+오짬뽕 6입4개(총24개)",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "25,200",
    "imgSrc": "smile_delivery_item_06.jpg",
    "imgAlt": "신라면+튀김우동+새우탕+오짬뽕 6입4개 상품 이미지",
    },
    {
    "id": 28,
    "brand": "일리윤",
    "title": "일리윤 세라마이드 아토로션 528ml 2개 + 증정품",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "43,000",
    "imgSrc": "smile_delivery_item_04.jpg",
    "imgAlt": "일리윤 세라마이드 아토로션 528ml 2개 + 증정품 상품 이미지",
    },
    {
    "id": 29,
    "brand": "농심",
    "title": "신라면 5봉 + 너구리 5봉 + 짜파게티 5봉 + 오징어짬뽕 4입",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "22,200",
    "imgSrc": "smile_delivery_item_05.jpg",
    "imgAlt": "신라면 5봉 + 너구리 5봉 + 짜파게티 5봉 + 오징어짬뽕 4입 상품 이미지",
    },
    {
    "id": 30,
    "brand": "웰치스",
    "title": "웰치스 제로 그레이프+체리스트로베리+샤인",
    "isDiscounted": false,
    "couponPrice": "0원",
    "discountPercent": "0%",
    "resultPrice": "23,000",
    "imgSrc": "smile_delivery_item_06.jpg",
    "imgAlt": "웰치스 제로 그레이프+체리스트로베리+샤인 상품 이미지",
    },
  ];

  // 스마일 프레시 카테고리 active
  $('.smile_fresh .categorys ul li .LinkBtn').click(function(event) {
    $('.smile_fresh .categorys ul li .LinkBtn').removeClass('active');
    $(this).addClass('active');
  });

  // 스마일 배송 카테고리 active
  $('.smile_delivery .categorys ul li .LinkBtn').click(function(event) {
    $('.smile_delivery .categorys ul li .LinkBtn').removeClass('active');
    $(this).addClass('active');
  });

  $('#link_btn_1').click(function(event) {
    event.preventDefault();

    createProductItem('smile_fresh', plusOne);
  });

  $('#link_btn_2').click(function(event) {
    event.preventDefault();

    createProductItem('smile_fresh', shearingGoods);
  });

  $('#link_btn_3').click(function(event) {
    event.preventDefault();

    createProductItem('smile_fresh', ohvanjang);
  });

  $('#link_btn_4').click(function(event) {
    event.preventDefault();

    createProductItem('smile_delivery', best);
  });

  $('#link_btn_5').click(function(event) {
    event.preventDefault();

    createProductItem('smile_delivery', freeDelivery);
  });

  // 상품 태그 생성 함수
  function createProductItem(shopTypeName, product) {
    // 제품 리스트 비우기
    $(`.${shopTypeName} .products ul`).empty();

    $.each(product, (i, el) => {

      const listItem = $('<li>');

      const link = $('<a>', { href: '#' });

      const imgBox = $('<div>', { class: 'img_box' });
      const img = $('<img>', {
          src: `./assets/img/${el.imgSrc}`,
          alt: el.imgAlt
      });
      imgBox.append(img);

      const descriptionBox = $('<div>', { class: 'description_box' });
      
      let productTag = shopTypeName === 'smile_fresh' ? '2개 사면 할인' : `${i + 1}`;
      const strongText = $('<strong>').text(productTag);

      const boldText = $('<b>').html(`<span class="brand_name">${el.brand}</span>${el.title}}`);

      const priceClassName = el.isDiscounted ? 'discounted' : '';
      const priceBox = $('<div>', { class: `price ${priceClassName}` });

      const priceCoupon = $('<div>', { class: 'price_coupon' })
          .html(`쿠폰적용가<del>${el.couponPrice}</del>`);

      const discountPercent = $('<span>', { class: 'price_discount_percent' }).text(el.discountPercent);
      const finalPrice = $('<span>', { class: 'price_result' })
          .html(`${el.resultPrice}<span class="price_result_unit">원</span>`);

      priceBox.append(priceCoupon, discountPercent, finalPrice);

      descriptionBox.append(strongText, boldText, priceBox);

      link.append(imgBox, descriptionBox);

      const cartButton = $('<button>', { class: 'shopping_cart' });
      const cartButtonText = $('<span>', { class: 'hide' }).text('장바구니 담기 버튼');
      cartButton.append(cartButtonText);

      listItem.append(link, cartButton);

      $(`.${shopTypeName} .products ul`).append(listItem);
    });
    
  }

});
