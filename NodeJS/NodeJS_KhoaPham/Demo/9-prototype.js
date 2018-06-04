function KhoaHoc(ten, hocphi) {
    this.Ten = ten;
    this.HocPhi = hocphi;
}

KhoaHoc.prototype.mota = function () {
    console.log(`Hello ${this.Ten} co hoc phi la ${this.HocPhi}`);
}
let nodejs = new KhoaHoc("Lap Trinh Node JS", 800)
nodejs.mota()