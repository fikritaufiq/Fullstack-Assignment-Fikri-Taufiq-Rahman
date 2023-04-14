export default function rupiah(price){
    return price.toLocaleString('id', { style: 'currency', currency: 'IDR' });
}