import Swal from "sweetalert2";

export const confirm = (opts, callback, callbackLoading, callbackRedirect) => {
    return Swal.fire({
        title: opts.title,
        text: opts.text,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Evet",
        cancelButtonText: "Vazgeç",
        customClass: {
            confirmButton: "btn btn-primary",
            cancelButton: "btn  btn-danger ml-1",
        },
    }).then(function (result) {
        if (result.value) {
            callback()
                .then((res) => {
                    if (res.data) {
                        Swal.fire({
                            icon: res.data.type === "success" ? "success" : "error",
                            title: res.data.type === "success" ? "Başarılı!" : "Hata!",
                            text: res.data.message,
                            confirmButtonText: "Tamam",
                            customClass: {
                                confirmButton: "btn btn-primary",
                            },
                        }).then(function (result) {
                            if (result.value) {
                                res.data.type === "success"
                                    ? callbackRedirect() && callbackLoading()
                                    : callbackLoading();
                            }
                        });
                    }
                })
                .catch((err) => {
                    if (err.statusCode === 401) {
                        Swal.fire({
                            icon: "error",
                            title: "error!",
                            text: "Oturum Süreniz Dolmuştur.",
                            confirmButtonText: "Tamam",
                            customClass: {
                                confirmButton: "btn btn-success",
                            },
                        }).then(function (result) {
                            if (result.value) {
                                localStorage.clear(); //logout a atıyoruz
                                window.location.reload();
                            }
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "error!",
                            text: "İşlem sırasında hata oluştu.",
                            confirmButtonText: "Tamam",
                            customClass: {
                                confirmButton: "btn btn-success",
                            },
                        }).then(function (result) {
                            if (result.value) {
                                callbackLoading();
                            }
                        });
                    }
                });
        }
    });
};