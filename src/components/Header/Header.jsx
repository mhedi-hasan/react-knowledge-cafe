import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between mx-auto mt-6 border-b-2 pb-4 items-center'>
            <h1 className='text-3xl font-bold mt-3'>React Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;