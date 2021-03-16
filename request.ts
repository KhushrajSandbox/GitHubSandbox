await fetch("http://localhost:8090/refresh", {
    method: "POST",
    body: JSON.stringify({ ok: "lolololol" }),
    headers: new Headers({
        Signature: "ok",
    }),
})
