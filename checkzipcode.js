
function is_usZipcode(str) {
    let regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;//bat dau voi chu so vaf co it nhat 5 kytu; khopws voi ku tu tuoc 0 hoac 1 lan la ku tu so ket thuc bbuoi ky tu so
    if (regexp.test(str)){
        return true;
    }else {
        return false;
    }
}

var zipcode = "03201-0121";
console.log(is_usZipcode(zipcode));

zipcode = "7892";
console.log(is_usZipcode(zipcode));