import PropTypes from 'prop-types'

const typeList = [
    '戲劇',
    '電影',
    '動畫',
    '紀錄片',
    '綜藝',
    '恐怖',
    '劇情',
    '愛情'
];

export default function TypeButtonScope() {
    return (
        <div className='flex flex-wrap gap-3 justify-center my-8'>
            {
                typeList.map((type, index) => (
                    <TypeButton key={index} type={type} onClick={() => console.log(type)} />
                ))
            }
        </div>
    )
}



function TypeButton({type, onClick}) {
    return (
        <button 
            onClick={onClick} 
            className={`px-6 py-3 rounded-lg bg-grey-800 hover:bg-grey-700 text-grey-300 font-extrabold text-base`}
        >
            {type}
        </button>
    )
}

TypeButton.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}