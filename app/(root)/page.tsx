import {
    Container,
    Filters,
    ProductsGroupList,
    TopBar,
} from '@/shared/components/shared';
import { Title } from '@/shared/components/shared/title';
import { Suspense } from 'react';
import { findPizzas, GetSearchParams } from '@/shared/lib/find-pizzas';

export default async function Home({
    searchParams,
}: {
    searchParams: GetSearchParams;
}) {
    const categories = await findPizzas(searchParams);

    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar
                categories={categories.filter(
                    (category) => category.products.length > 0
                )}
            />
            <Container>
                <div className="flex gap-[60px] pt-8">
                    <div className="w-[250px]">
                        <Suspense>
                            <Filters />
                        </Suspense>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {categories.map(
                                (category) =>
                                    category.products.length > 0 && (
                                        <ProductsGroupList
                                            key={category.id}
                                            title={category.name}
                                            categoryId={category.id}
                                            items={category.products}
                                        />
                                    )
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

// const pizzas = [
//     {
//         id: 1,
//         name: "Сырная",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FABAED8998CAC0985BFB698FA.avif",
//         price: 1500,
//         items: [{ price: 1500 }],
//     },
//     {
//         id: 2,
//         name: "Вау! Кебаб",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF01FEE6DD7261A9C36187149758D0.avif",
//         price: 2990,
//         items: [{ price: 2990 }],
//     },
//     {
//         id: 3,
//         name: "Береке ет",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF1CB7AB16CECF87C419EF9EEFACA0.avif",
//         price: 3300,
//         items: [{ price: 3300 }],
//     },
//     {
//         id: 4,
//         name: "Кебабная с аджикой 🌶🌶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF5622E6E8DBB7AD0C2EF8A641422A.avif",
//         price: 2990,
//         items: [{ price: 2990 }],
//     },
//     {
//         id: 5,
//         name: "Креветки со сладким чили",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF01FD3C2AC8E791770181C4A9C04D.avif",
//         price: 2990,
//         items: [{ price: 2990 }],
//     },
//     {
//         id: 6,
//         name: "Пицца из половинок",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FECCD3AC0B2E2C417625FCB02.avif",
//         price: 3600,
//         items: [{ price: 3600 }],
//     },
//     {
//         id: 7,
//         name: "Чоризо фреш 🌶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
//         price: 1900,
//         items: [{ price: 1900 }],
//     },
//     {
//         id: 8,
//         name: "Ветчина и сыр",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F6DF65F019BF69E6D8B69551F.avif",
//         price: 2100,
//         items: [{ price: 2100 }],
//     },
//     {
//         id: 9,
//         name: "Двойной цыпленок",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FABAED8998CAC0985BFB698FA.avif",
//         price: 2200,
//         items: [{ price: 2200 }],
//     },
//     {
//         id: 10,
//         name: "Жюльен",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FD6097096B601585D57F44A6F.avif",
//         price: 2990,
//         items: [{ price: 2990 }],
//     },
//     {
//         id: 11,
//         name: "Баварская",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
//         price: 2700,
//         items: [{ price: 2700 }],
//     },
//     {
//         id: 12,
//         name: "Додо микс",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF0200EEEC6E8D9D2FD096202033A0.avif",
//         price: 2990,
//         items: [{ price: 2990 }],
//     },
//     {
//         id: 13,
//         name: "Песто",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FA4770D3ABE91CC4ED0EB1A90.avif",
//         price: 2990,
//         items: [{ price: 2990 }],
//     },
//     {
//         id: 14,
//         name: "Карбонара",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FA31F8AB3B6E6D7F8F41F3CF3.avif",
//         price: 2650,
//         items: [{ price: 2650 }],
//     },
//     {
//         id: 15,
//         name: "Мясная",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F9A6B363082D450891D7FA8AC.avif",
//         price: 2990,
//         items: [{ price: 2990 }],
//     },
//     {
//         id: 16,
//         name: "Аррива!",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FA1473FA0BF81A790D3E99578.avif",
//         price: 2650,
//         items: [{ price: 2650 }],
//     },
//     {
//         id: 17,
//         name: "Бургер-пицца",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FC4B92AEFBDCF1F0DB2745D1C.avif",
//         price: 2700,
//         items: [{ price: 2700 }],
//     },
//     {
//         id: 18,
//         name: "Сырный цыпленок",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F84D55746A7EEEF68CD89C1B1.avif",
//         price: 2990,
//         items: [{ price: 2990 }],
//     },
//     {
//         id: 19,
//         name: "Додо",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F88E4D0669E64984A504FAA9F.avif",
//         price: 3300,
//         items: [{ price: 3300 }],
//     },
//     {
//         id: 20,
//         name: "Четыре сезона",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F92DFCD9E84600C4DD6B916D4.avif",
//         price: 2650,
//         items: [{ price: 2650 }],
//     },
//     {
//         id: 21,
//         name: "Гавайская",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FD087DFC0AD3589C12CB6D605.avif",
//         price: 2700,
//         items: [{ price: 2700 }],
//     },
//     {
//         id: 22,
//         name: "Пепперони с грибами",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF01FF6733959B9A68B4188AB4E654.avif",
//         price: 2100,
//         items: [{ price: 2100 }],
//     },
//     {
//         id: 23,
//         name: "Цыпленок барбекю",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F909B2FC398EECBB0442C3C8F.avif",
//         price: 2990,
//         items: [{ price: 2990 }],
//     },
//     {
//         id: 24,
//         name: "Цыпленок ранч",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F71EE8F05A6E096AB15672DC9.avif",
//         price: 2990,
//         items: [{ price: 2990 }],
//     },
//     {
//         id: 25,
//         name: "Маргарита 🌱",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F7DFCC07695BBB44734525217.avif",
//         price: 2650,
//         items: [{ price: 2650 }],
//     },
//     {
//         id: 26,
//         name: "Диабло 🌶🌶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F7DFCC07695BBB44734525217.avif",
//         price: 3300,
//         items: [{ price: 3300 }],
//     },
//     {
//         id: 27,
//         name: "Пепперони фреш",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F9D4F264D98D40BF411913DB1.avif",
//         price: 2100,
//         items: [{ price: 2100 }],
//     },
//     {
//         id: 28,
//         name: "Пепперони",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F7355A2F19DFA2F42D1A20647.avif",
//         price: 2700,
//         items: [{ price: 2700 }],
//     },
//     {
//         id: 29,
//         name: "Колбаски Барбекю",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FAE66F66FB17F012989D718F0.avif",
//         price: 2650,
//         items: [{ price: 2650 }],
//     },
//     {
//         id: 30,
//         name: "Двойная пепперони",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5F768BA780A8562AB1F8A055BA.avif",
//         price: 2990,
//         items: [{ price: 2990 }],
//     },
// ];
//
// const combo = [
//     {
//         id: 1,
//         name: "Patrol комбо",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF558948C7BBE3B9774858B1D60ABD.avif",
//         price: 2500,
//         items: [{ price: 2500 }],
//     },
//     {
//         id: 2,
//         name: "Комбо за 3900 ₸",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF0152C4EF8EA689865690AC33FA03.avif",
//         price: 3900,
//         items: [{ price: 3900 }],
//     },
//     {
//         id: 3,
//         name: "2 пиццы",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7E215D8C4FED8A0E004FEC01E713.avif",
//         price: 5300,
//         items: [{ price: 5300 }],
//     },
//     {
//         id: 4,
//         name: "3 пиццы",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7E215EA3A03C84F00C3554992CAB.avif",
//         price: 7700,
//         items: [{ price: 7700 }],
//     },
//     {
//         id: 5,
//         name: "2 пиццы и напиток",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF01524B2B3134BC40AD7A2D2FE5BC.avif",
//         price: 4100,
//         items: [{ price: 4100 }],
//     },
//     {
//         id: 6,
//         name: "4 Закуски",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7E215EFBE449817000DE1E4DEF9D.avif",
//         price: 4700,
//         items: [{ price: 4700 }],
//     },
//     {
//         id: 7,
//         name: "5 пицц",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7E215F77BCE59F78787227C3B6DD.avif",
//         price: 13400,
//         items: [{ price: 13400 }],
//     },
//     {
//         id: 8,
//         name: "7 пицц",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7E215E6BB1F79E8933766D1CA4E1.avif",
//         price: 17600,
//         items: [{ price: 17600 }],
//     },
//     {
//         id: 9,
//         name: "10 средних пицц",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7E216096073F8579B2444F2467C4.avif",
//         price: 25100,
//         items: [{ price: 25100 }],
//     },
//     {
//         id: 10,
//         name: "2 десерта",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7E215AE6B0428BEA269C5D7E18AA.avif",
//         price: 1300,
//         items: [{ price: 1300 }],
//     },
//     {
//         id: 11,
//         name: "2 напитка",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF014202E04875B62191676CECC546.avif",
//         price: 1000,
//         items: [{ price: 1000 }],
//     },
//     {
//         id: 12,
//         name: "Два соуса",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7E215997EC27B368F7D55E1AF7F9.avif",
//         price: 500,
//         items: [{ price: 500 }],
//     },
// ];
//
// const snacks = [
//     {
//         id: 1,
//         name: "Додстер кебабный с аджикой 🌶🌶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF535D0EA234BBB3232ACDB4547071.avif",
//         price: 1600,
//         items: [{ price: 1600 }],
//     },
//     {
//         id: 2,
//         name: "Чикен ролл",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EEF1D028A4F3AC9052B9FB99277A36.avif",
//         price: 1300,
//         items: [{ price: 1300 }],
//     },
//     {
//         id: 3,
//         name: "Дэнвич ветчина и сыр",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F1967B5AF950A96DC718BF68D.avif",
//         price: 1900,
//         items: [{ price: 1900 }],
//     },
//     {
//         id: 4,
//         name: "Дэнвич чоризо барбекю",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F199D77D2915380727F09D3B7.avif",
//         price: 1900,
//         items: [{ price: 1900 }],
//     },
//     {
//         id: 5,
//         name: "Паста с креветками",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF55D64CE13A7F8F39D08005561DE0.avif",
//         price: 2700,
//         items: [{ price: 2700 }],
//     },
//     {
//         id: 6,
//         name: "Паста Мясная",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F1A7FFAC9B2A6D4DD0F2BFB2A.avif",
//         price: 2600,
//         items: [{ price: 2600 }],
//     },
//     {
//         id: 7,
//         name: "Паста Песто",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F1AB4D0B0AE915C30248D0CE4.avif",
//         price: 2600,
//         items: [{ price: 2600 }],
//     },
//     {
//         id: 8,
//         name: "Паста Береке",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF5DFD5705255997257AC852FD3752.avif",
//         price: 2600,
//         items: [{ price: 2600 }],
//     },
//     {
//         id: 9,
//         name: "Супермясной Додстер",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F166475F080334AA3B1289699.avif",
//         price: 1800,
//         items: [{ price: 1800 }],
//     },
//     {
//         id: 10,
//         name: "Острый Додстер 🌶🌶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796EF1EB53BA87169C2905C0C567.avif",
//         price: 1700,
//         items: [{ price: 1700 }],
//     },
//     {
//         id: 11,
//         name: "Додстер",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796ED53607AAAFBD7A1EF6ECC214.avif",
//         price: 1600,
//         items: [{ price: 1600 }],
//     },
//     {
//         id: 12,
//         name: "Додстер Вау! Кебаб",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF020014EC43D6994F3D276D755531.avif",
//         price: 1900,
//         items: [{ price: 1900 }],
//     },
//     {
//         id: 13,
//         name: "Грибной Стартер 🌱",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796EDE6BB3E99B0562BC49937EF1.avif",
//         price: 1500,
//         items: [{ price: 1500 }],
//     },
//     {
//         id: 14,
//         name: "Сырный Стартер",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F0ABF3DE29D51497077EEC170.avif",
//         price: 1500,
//         items: [{ price: 1500 }],
//     },
//     {
//         id: 15,
//         name: "Куриные наггетсы",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EEF45F462096838FE18BB893D93602.avif",
//         price: 900,
//         items: [{ price: 900 }],
//     },
//     {
//         id: 16,
//         name: "Картофель из печи 🌱👶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE85418A5A22A5BDB76CC58FE4EFB4.avif",
//         price: 900,
//         items: [{ price: 900 }],
//     },
//     {
//         id: 17,
//         name: "Картофельные дольки с сырным соусом",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FD4F1435CB186D9BEAFF3EBAE.avif",
//         price: 800,
//         items: [{ price: 800 }],
//     },
//     {
//         id: 18,
//         name: "Картофельные дольки",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE878183B8CEBE9168F5162F6C478F.avif",
//         price: 600,
//         items: [{ price: 600 }],
//     },
//     {
//         id: 19,
//         name: "Картофельные смайлики",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF5DFDEBE6431BABD49F3845FCA22B.avif",
//         price: 600,
//         items: [{ price: 600 }],
//     },
//     {
//         id: 20,
//         name: "Ланчбокс с крыльями барбекю",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796EECEFBB139D1BCFA7C8A4226D.avif",
//         price: 2600,
//         items: [{ price: 2600 }],
//     },
//     {
//         id: 21,
//         name: "Салат Цезарь",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F10582594AEEFC35D14F54A73.avif",
//         price: 2100,
//         items: [{ price: 2100 }],
//     },
//     {
//         id: 22,
//         name: "Куриные кусочки 👶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FEA740036A282D15974613786.avif",
//         price: 1500,
//         items: [{ price: 1500 }],
//     },
//     {
//         id: 23,
//         name: "Куриные крылья барбекю",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE89376C3A465BABB6F5D85DB66A14.avif",
//         price: 2900,
//         items: [{ price: 2900 }],
//     },
// ];
//
// const breakfast = [
//     {
//         id: 1,
//         name: "Омлет сырный",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF5DFCE1115ED1855E5B33095394E1.avif",
//         price: 1600,
//         items: [{ price: 1600 }],
//     },
//     {
//         id: 2,
//         name: "Омлет с ветчиной и грибами",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF5DFCF6CBCB049A8322508E3D388B.avif",
//         price: 1600,
//         items: [{ price: 1600 }],
//     },
//     {
//         id: 3,
//         name: "Омлет с пепперони",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF5DFCEC1874EBA6775E2A75EC02DC.avif",
//         price: 1600,
//         items: [{ price: 1600 }],
//     },
//     {
//         id: 4,
//         name: "Блины с мясом",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF53D598D3B19CAE2533A09BCE14C2.avif",
//         price: 1600,
//         items: [{ price: 1600 }],
//     },
//     {
//         id: 5,
//         name: "Блины с курицей и грибами",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF53D51C20FF2BAF251AE056E22A61.avif",
//         price: 1600,
//         items: [{ price: 1600 }],
//     },
//     {
//         id: 6,
//         name: "Блины с творогом",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF53D492C368CFAAFEE58E89FC548E.avif",
//         price: 1600,
//         items: [{ price: 1600 }],
//     },
//     {
//         id: 7,
//         name: "Сырники с малиновым вареньем 👶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FE8809BE8855C790C2397B237.avif",
//         price: 1400,
//         items: [{ price: 1400 }],
//     },
//     {
//         id: 8,
//         name: "Комбо Завтрак на двоих",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF53D3DC61A513BADB62F99C0E5AA5.avif",
//         price: 4200,
//         items: [{ price: 4200 }],
//     },
// ];
//
// const cocktails = [
//     {
//         id: 1,
//         name: "Молочный коктейль Ежевика-малина",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF18D081A5575F9FD95A1400F504D8.avif",
//         price: 1990,
//         items: [{ price: 1990 }],
//     },
//     {
//         id: 2,
//         name: "Молочный коктейль Пина Колада",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF18D22CBC5C0AB6F22E982ACEC859.avif",
//         price: 1990,
//         items: [{ price: 1990 }],
//     },
//     {
//         id: 3,
//         name: "Молочный коктейль с печеньем Орео",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796EDC8861BC860E43989A45C019.avif",
//         price: 1990,
//         items: [{ price: 1990 }],
//     },
//     {
//         id: 4,
//         name: "Классический молочный коктейль 👶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796ECF42909DB401D3BFF796742E.avif",
//         price: 1990,
//         items: [{ price: 1990 }],
//     },
//     {
//         id: 5,
//         name: "Клубничный молочный коктейль 👶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF18D0C055057E879581E384E98506.avif",
//         price: 1990,
//         items: [{ price: 1990 }],
//     },
//     {
//         id: 6,
//         name: "Шоколадный молочный коктейль",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF18D4C33EECE59011F43C8F416992.avif",
//         price: 1990,
//         items: [{ price: 1990 }],
//     },
//     {
//         id: 7,
//         name: "Карамельное яблоко молочный коктейль",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F1C08C06DB7E2DD8E68DDBCA6.avif",
//         price: 2100,
//         items: [{ price: 2100 }],
//     },
// ];
//
// const coffee = [
//     {
//         id: 1,
//         name: "Кофе Капучино",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FDE2ECB8A9C04B1C9C797196D.avif",
//         price: 1000,
//         items: [{ price: 1000 }],
//     },
//     {
//         id: 2,
//         name: "Кофе Латте",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FE022E6ADBBB9536F9AEF79F7.avif",
//         price: 1000,
//         items: [{ price: 1000 }],
//     },
//     {
//         id: 3,
//         name: "Ирландский Капучино",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FD56D201B860BF98EFA2DCA48.avif",
//         price: 1200,
//         items: [{ price: 1200 }],
//     },
//     {
//         id: 4,
//         name: "Карамельный Капучино",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FDEAA48FCB8982EBD4349EE54.avif",
//         price: 1200,
//         items: [{ price: 1200 }],
//     },
//     {
//         id: 5,
//         name: "Кофе Ореховый латте",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FE09C942E9B40710C68641D1B.avif",
//         price: 1200,
//         items: [{ price: 1200 }],
//     },
//     {
//         id: 6,
//         name: "Айс капучино",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F0F282A1393F7B7C62557EB0B.avif",
//         price: 1600,
//         items: [{ price: 1600 }],
//     },
// ];
//
// const drinks = [
//     {
//         id: 1,
//         name: "Какао",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F1E930BCBBEA5F68F5CBDB82F.avif",
//         price: 900,
//         items: [{ price: 900 }],
//     },
//     {
//         id: 2,
//         name: "Pepsi",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF015215F8CC9094724B66F59D0D9E.avif",
//         price: 600,
//         items: [{ price: 600 }],
//     },
//     {
//         id: 3,
//         name: "Pepsi Zero",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF01522D02FC228FCD9D3B847E5D7F.avif",
//         price: 600,
//         items: [{ price: 600 }],
//     },
//     {
//         id: 4,
//         name: "7UP",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FE3C24295A8BB624018E41106.avif",
//         price: 600,
//         items: [{ price: 600 }],
//     },
//     {
//         id: 5,
//         name: "Mirinda",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FE61E52FD98C08F0CCF44BFF2.avif",
//         price: 600,
//         items: [{ price: 600 }],
//     },
//     {
//         id: 6,
//         name: "Чай Lipton черный с персиком",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796EF2CF16DF87982178BCC836E0.avif",
//         price: 800,
//         items: [{ price: 800 }],
//     },
//     {
//         id: 7,
//         name: "Чай Lipton зеленый",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796EF2CF16DF87982178BCC836E0.avif",
//         price: 800,
//         items: [{ price: 800 }],
//     },
//     {
//         id: 8,
//         name: "Сок DaDa Зеленое яблоко",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF128DF542F3839D61ED0A19E0D1D9.avif",
//         price: 700,
//         items: [{ price: 700 }],
//     },
//     {
//         id: 9,
//         name: "Сок DaDa Персик",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF128E04CC40A690CAAF66244C4321.avif",
//         price: 700,
//         items: [{ price: 700 }],
//     },
//     {
//         id: 10,
//         name: "Сок DaDa Тропик",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF128E10D47AA4A35394C03B5B106F.avif",
//         price: 700,
//         items: [{ price: 700 }],
//     },
//     {
//         id: 11,
//         name: "Сок DaDa Яблоко и Клубника",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE91021BEB284592BCB9ABF67B5BD0.avif",
//         price: 900,
//         items: [{ price: 900 }],
//     },
//     {
//         id: 12,
//         name: "Сок DaDa Ягоды и Каркаде",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F0061A556BA121F5EA45422AC.avif",
//         price: 900,
//         items: [{ price: 900 }],
//     },
//     {
//         id: 13,
//         name: "Сок DaDa Апельсин и Лемонграсс",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F008328E28532C5022B074B13.avif",
//         price: 900,
//         items: [{ price: 900 }],
//     },
//     {
//         id: 14,
//         name: "Сок Gracio Яблоко",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796EF32BA2A084ED6BA6F365264E.avif",
//         price: 1700,
//         items: [{ price: 1700 }],
//     },
//     {
//         id: 15,
//         name: "Сок Gracio Персик",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796EF34A6F4090C4F5913CE727C0.avif",
//         price: 1700,
//         items: [{ price: 1700 }],
//     },
//     {
//         id: 16,
//         name: "Сок Gracio Апельсин",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796EF31078F9BD9EED2E302EB206.avif",
//         price: 1700,
//         items: [{ price: 1700 }],
//     },
//     {
//         id: 17,
//         name: "ASU газированная",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796EF2A54C3F9D57D98EE68724C0.avif",
//         price: 600,
//         items: [{ price: 600 }],
//     },
//     {
//         id: 18,
//         name: "ASU негазированная",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796EF283421CB21FD87F1386B831.avif",
//         price: 600,
//         items: [{ price: 600 }],
//     },
//     {
//         id: 19,
//         name: "Морс Клюква 👶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796ED07B177181EB7BE755980C4B.avif",
//         price: 990,
//         items: [{ price: 990 }],
//     },
//     {
//         id: 20,
//         name: "Морс Черная Смородина 👶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796ED037D6DDAEE0FAB95CF22A5A.avif",
//         price: 990,
//         items: [{ price: 990 }],
//     },
//     {
//         id: 21,
//         name: "Морс Вишня 👶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796ED09AEF50BCB606364846E143.avif",
//         price: 990,
//         items: [{ price: 990 }],
//     },
//     {
//         id: 22,
//         name: "Таежный чай, 10 сашетов",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F1859F867936C950913B39F23.avif",
//         price: 1900,
//         items: [{ price: 1900 }],
//     },
// ];
//
// const desserts = [
//     {
//         id: 1,
//         name: "Чизкейк Нью Йорк с кокосом",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EEFCB4589EA30F973972E4FCD4573C.avif",
//         price: 1400,
//         items: [{ price: 1400 }],
//     },
//     {
//         id: 2,
//         name: "Эклеры-мини с заварным кремом",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F1F88D772BC9696AB5EDE342C.avif",
//         price: 900,
//         items: [{ price: 900 }],
//     },
//     {
//         id: 3,
//         name: "Сорбет бразильская маракуйя и манго",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F1D3BF66A854F09C6AC9781E5.avif",
//         price: 800,
//         items: [{ price: 800 }],
//     },
//     {
//         id: 4,
//         name: "Сорбет Турецкий гранат с клубникой",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F1CFA3D45B1621E4A3497441F.avif",
//         price: 900,
//         items: [{ price: 900 }],
//     },
//     {
//         id: 5,
//         name: "Чизкейк Нью-Йорк",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F05152B8D98823B2CD3E0A913.avif",
//         price: 1400,
//         items: [{ price: 1400 }],
//     },
//     {
//         id: 6,
//         name: "Чизкейк Банановый с шоколадным печеньем",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F131EA9229301FB12067C465F.avif",
//         price: 1400,
//         items: [{ price: 1400 }],
//     },
//     {
//         id: 7,
//         name: "Макарон манго-маракуйя",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F1E5F7010A9B355527416DFE8.avif",
//         price: 700,
//         items: [{ price: 700 }],
//     },
//     {
//         id: 8,
//         name: "Маффин Три шоколада",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F019EDCD19B93EC4211E4EDBF.avif",
//         price: 800,
//         items: [{ price: 800 }],
//     },
//     {
//         id: 9,
//         name: "Маффин Соленая карамель",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F14F731959206A4DC05923BCC.avif",
//         price: 800,
//         items: [{ price: 800 }],
//     },
//     {
//         id: 10,
//         name: "Шоколадный кукис",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F160A09BC885B33C31F019C9E.avif",
//         price: 800,
//         items: [{ price: 800 }],
//     },
//     {
//         id: 11,
//         name: "2 Пончика Тройной шоколад",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F0B8912BF9911E1640F607399.avif",
//         price: 1800,
//         items: [{ price: 1800 }],
//     },
//     {
//         id: 12,
//         name: "Пончик клубничный",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE8784019566D7A1EDCBB28A2F60F6.avif",
//         price: 990,
//         items: [{ price: 990 }],
//     },
//     {
//         id: 13,
//         name: "Фондан",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FE9CA88CF95E51165FE36518D.avif",
//         price: 2100,
//         items: [{ price: 2100 }],
//     },
//     {
//         id: 14,
//         name: "Слоеные палочки с ананасами и брусникой",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE796F120118208224A0FD595B2E56.avif",
//         price: 1800,
//         items: [{ price: 1800 }],
//     },
//     {
//         id: 15,
//         name: "Сырники с малиновым вареньем 👶",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FE8809BE8855C790C2397B237.avif",
//         price: 1400,
//         items: [{ price: 1400 }],
//     },
//     {
//         id: 16,
//         name: "Бруслетики",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EF11EE37FA3B04B37D754690C0B180.avif",
//         price: 1200,
//         items: [{ price: 1200 }],
//     },
//     {
//         id: 17,
//         name: "Рулетики с корицей",
//         imageUrl:
//             "https://media.dodostatic.net/image/r:584x584/11EE7D5FE75E1209BD297DF07D9F02B2.avif",
//         price: 1000,
//         items: [{ price: 1000 }],
//     },
// ];
