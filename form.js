const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const textarea = document.querySelector('textarea');


    inputs.forEach(input => {
        const adicionarClass = () => {
            labels.forEach(label => {
                if(label.id == input.id){
                    label.classList.add('foco');
                }
            })
        }
        const removeClass = () => {
            labels.forEach(label => {
            if(label.id == input.id && input.value == ''){
                label.classList.remove('foco');
            }
        })
    }
        input.addEventListener('focus', adicionarClass)
        input.addEventListener('blur', removeClass)
    })

    textarea.addEventListener('focus', () => {
        document.querySelector('#mensagem').classList.add('foco');
    });
    textarea.addEventListener('blur', () => {
        if(textarea.value == ''){
            document.querySelector('#mensagem').classList.remove('foco');
        }
    });