export default function AppHeader({ title, description, children }) {
    return (
        <header style={{ 
            backgroundImage: 'url(https://i.imgur.com/mLvApYc.jpeg)', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '1024px',
            position: 'relative'
            }}>
            <div className="container" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '20px',
                borderRadius: '8px',
                position: 'absolute', // 設置container為絕對定位
                top: '20%', // 將container置於header垂直中心
                left: '50%', // 將container置於header水平中心
                transform: 'translate(-50%, -50%)' // 調整container位置
            }}>
                <h1>{title}</h1>
                <p>{description}</p>
                {children}
            </div>
        </header>
    );
}