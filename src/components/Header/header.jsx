import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-5 border-b-2 md:container'>
            <h1 className="text-5xl font-bold">knowledge cafe</h1>
            <img src={profile}></img>
        </div>
    );
};

export default Header;