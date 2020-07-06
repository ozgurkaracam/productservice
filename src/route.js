
import ProductList from "./components/product/ProductList";
import ProductPurchase from "./components/product/ProductPurchase";
import ProductSell from "./components/product/ProductSell";

export const routes=[
    {'path':'/', 'component':ProductList},
    {'path':'/urun-cikisi','component':ProductSell},
    {'path':'/urun-girisi','component':ProductPurchase},
    {'path':'*',redirect:'/'}
];