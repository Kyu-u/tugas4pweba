function validateForm() {
    var nama = document.forms["validasiForm"]["nama"].value;
    if (nama == "" || nama == null) {
        alert("Form nama kosong");
        return false;
    }

    var nrp = document.forms["validasiForm"]["nrp"].value;
    if (nrp == "" || nrp == null) {
        alert("Form NRP kosong");
        return false;
    }

    var domisili = document.forms["validasiForm"]["domisili"].value;
    if (domisili == "" || domisili == null) {
        alert("Form domisili kosong");
        return false;
    }

    if (document.forms["validasiForm"]["departemen"].selectedIndex < 1) {
        alert("Form departemen kosong");
        return false;
    }
alert("Data berhasil disubmit");
}