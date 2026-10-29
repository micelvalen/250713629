var iUmur;
var nama = document.getElementById("nama").value;
var email = document.getElementById("nama").value;
var umur = document.getElementById("umur").value;
var kategori = = document.getElementById("kategori").value;
var cekEmail = ^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$;

function fn_ValForm() {
    var sMsg = "";

        if(nama == "") {
            sMsg += "\n* Data Belum Lengkap";
        }

        if(email == "") {
            sMsg += "\n* Data Belum Lengkap";
        }

        if(umur == "") {
            sMsg += "\n* Data Belum Lengkap";
        }

        if (sMsg != "") {
            alert("Peringatan: \n" + sMsg);
            return false;
        }else{
            return true;
        }

        if(!email) {
            sMsg += "\n* email Belum Lengkap";
        }

        if(iUmur <= 25) {
            alert("Peserta Mahasiswa");
        } else {
            alert("Peserta Umum");
        }

        if(kategori == ""){
            sMsg += "\n* Data Belum Lengkap";
        }

        switch (kategori) {
            case "W":
                alert("Workshop");
                break;
            case "S":
                alert("Seminar");
                break; 
            case "L":
                alert("Lomba Coding");
                break; 
            default:
                alert("Transportasi tidak tersedia");
        }

alert("Terima kasih" + nama + "! Anda terdaftar di acara" + pilihan + " " + umur);

}



