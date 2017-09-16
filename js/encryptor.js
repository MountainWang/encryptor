function fuck() {
    console.log(window.getElementById('pwinput').value);
    var datas = {
        visa: "U2FsdGVkX193xFEoETia4Jw+obN7bxJmveaR+X8kthBGTpbCkz…ucNwevsBOv2awbzfk0boUnNe6gCA62AepQm6KeRfmry0gZq1G",
        master: "U2FsdGVkX19W1WR+6nzpRFpfR1u7XEBeCCwfld8khHoU+XnFfa…EIzcdfcGIPciqhC7MiAU3jlOu+obCBLrLE0VnGQ6oJVDogN/A",
        ae: "U2FsdGVkX1+TiY4BMLZi71CPzpecTQJuGVNtplQZBaCpHJYpLN…dYu9b7GKz5NC32rNjyyom9TKLt6MCA216dTXcYIOqyGfMKg==",
        up30: "U2FsdGVkX1/AYWI49ojXJgrQjxtBPgonPTfih849NCVvGy4JQY…JSkJVLqYBwUmI05vjBgziT4dVDm7mPXG+pF6Iye6Ko9uWXQ==",
        upgold: "U2FsdGVkX19W0pm4Oo5ksYOREe7aAHZ5EAvZIBKQwS8DeaZjAL…jSgEbY/LZCCEB9k1Rfi0CnYlXyP703glOVVywdA23uWNH3w==",
        uplol: "U2FsdGVkX1/2A9q6N32C+oWdeSqUXYoBWzFiLLefZo30HD6Pze…uJh87GHJWKdLT/FRz3BFYHygNxEejaNaExb1arDP30L/BqSrt"
    };
    var pws = {
        ae: "U2FsdGVkX1/fIKPWt0Xwst1l79rwtikm0TNwV5Dsamk=",
        master: "U2FsdGVkX1+GBWmgbFmufV3pdDkzCNZCiVTmei4hx7W45OEkT3rCQqxu7e32PIDh",
        up30: "U2FsdGVkX18fMoPS+wrJ+bcMeIq94Fy9Vclofjk8QiM=",
        upgold: "U2FsdGVkX1+pRPtTjmV5FdIcPY+k/Pfj/ZgymWySEtslBa9cM5Xf4AXyOxBS8265",
        uplol: "U2FsdGVkX1/0LG3gQ4gR7CFA9Sd1dWCIgVnQjMxEsYM=",
        visa: "U2FsdGVkX1/7vBHUTwOwX4JWwXNle7ahzg0dzZ4J5vHKBOv6p6A2G2716OBDrU25"
    };

    // var props = pws.keys();
    var loop = Object.keys(datas);
    for (var i = 0; i < loop.length; i++) {
        console.log(pws[loop[i]]);
        console.log(decrypt(pws[loop[i]], 'Mtw526391256'));
        datas[loop[i]] = decrypt(datas[loop[i]], 'Mtw526391256');
    }
    console.log(datas);



};




var encrypt = function(str, key) {
    return CryptoJS.AES.encrypt(str, key).toString();
};
var decrypt = function(str, key) {
    return CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8);
};
var a = {
    "name": "tom",
    "sex": "男",
    "age": "24"
};

var b = '{"name":"Mike","sex":"女","age":"29"}';

var aToStr = JSON.stringify(a);

var bToObj = JSON.parse(b);