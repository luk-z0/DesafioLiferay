let btAdd = document.getElementById("add");
let inserirNome = document.getElementById("pessoa")
let body = document.querySelector("footer")
let p = document.createElement('p')

let q = new Queue();

function addPessoa() {

    if (btAdd.addEventListener) {
        btAdd.addEventListener('click', addPessoa);
        p.innerHTML = inserirNome.value;
        body.appendChild(p);


    }
}

btAdd.onclick = addPessoa;


/*
function Fila() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {

        btAdd.addEventListener('click', q.insertQueue);

    }, [counter],);
    return (
        <>
            <button id={'adicionar'} onClick={() => setCounter(counter + 1)}></button>

            <h1>
                {inserirNome.value}
            </h1>


        </>
    );
}
*/

