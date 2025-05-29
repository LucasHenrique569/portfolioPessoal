const form = document.getElementById('formulary_id_for_validation');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, digite um e-mail válido.');
        return;
    }

    // Se passou na validação, envia o formulário
    form.submit();
    }
);