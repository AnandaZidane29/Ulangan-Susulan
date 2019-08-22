const barang = [
    {
        "gambar":"assets/img/images.jpg",
        "nama":"Tas",
        "harga":"150.000"
    },
    {
        "gambar":"assets/img/3.jpg",
        "nama":"Sepatu",
        "harga":"200.000"
    },
    {
        "gambar":"assets/img/4.jpg",
        "nama":"baju",
        "harga":"100.000"
    },
    {
        "gambar":"assets/img/55.jpg",
        "nama":"Celana",
        "harga":"80.000"
    },
    {
        "gambar":"assets/img/6.jpg",
        "nama":"Topi",
        "harga":"35.000"
    },
];

   let x;

for(x in barang){
    let namaBarang = barang[x].nama
    let gambarBarang = barang[x].gambar
    let hargaBarang = barang[x].harga
    let divider = "<div>\
    <div class='item'>\
    <div class='gambar'><img src='"+gambarBarang+"' alt=''/></div>\
    <div class='nama-barang'>"+namaBarang+"</div>\
    <div class='harga-barang'>"+hargaBarang+"</div>\
    </div>";
    document.getElementById('nama-barang').innerHTML += divider
}