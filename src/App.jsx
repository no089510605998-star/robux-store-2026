import React, { useState } from 'react';

// Ikon Heksagon Robux Resmi
const RobuxHexIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 3.5l6.5 3.6v5.8L12 18.5 5.5 14.9V9.1L12 5.5zm0 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
  </svg>
);

// Ikon Arrow Up From Line
const ArrowUpFromLineIcon = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M18 9l-6-6-6 6" />
    <path d="M12 3v14" />
    <path d="M5 21h14" />
  </svg>
);

export default function App() {
  const [username, setUsername] = useState('sfnaaa');
  const [userData, setUserData] = useState({
    displayName: 'sfnaaa',
    username: 'safana_bott',
    userId: 3193274552,
    avatarUrl: 'https://images.rbxcdn.com/905bd722ee0a6ceda3caacde54c0b081.png'
  });
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('QRIS');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Send Modal & Friends State
  const [showSendModal, setShowSendModal] = useState(false);
  const [searchFriend, setSearchFriend] = useState('');
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [transferSuccess, setTransferSuccess] = useState(false);

  // Daftar 21 Teman Asli dari Cuplikan HTML
  const friendsList = [
    { name: 'Ame', hasPlus: true, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-DB939CC544B41B36CF4EC1C7D93F7756-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'CaLLmE_We1rdO', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-CECF12B715F0C0BC18500DB16FF1F712-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'acetaminophen', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-0FFFD12B8B4FFFF10EDAB47638C123FD-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'Mobkeyy', hasPlus: true, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-59B03D17523D4196C067037C2B126EF1-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: '特西可愛', hasPlus: true, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-89286E355BD4B81CD945E19973CA291A-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'Ale', hasPlus: true, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-92EAE3FD26E7FC5D2BB37AB3278DAEE6-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'V8xValsk', hasPlus: true, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-20B671D7FDAFE154590115223D33B942-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'vana', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-223BA234BAFA9B1380674E9D6649E4E5-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'savinghex', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-991BC766DF94AA21994D2D98B93769CE-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'Sky', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-227CE8BEC85F79523D83B2D73D84C2DB-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'deiaaa', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-85221B7600044C8593D759CA63763240-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'saya1234bh', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-0C8E7884485BB5E4A3C443DFACF5F070-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'Purity', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-BF1B9850C1B068033F348B923E7BF674-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'Marshmallowww', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-12B414F4BFAA488AECB0265A497A6FCD-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: '2222eeee1233', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-3D206A52D02296EAC6C7509EB17AF10B-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'hazem', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-F966730649F98C46D1D998C5DF35EC05-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'darkchoco_17', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-5FBD16B1F2BA3E982854FB31E485B5C1-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'cimoy_geter', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-4CEB4EF7F41C9B94DE69BB52E468A56B-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: '・ヘ・', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-1E4BD61F21F960E8032C33C8E394FC89-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'IniViaa', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-98CBDC5009B34358E8D826DE29292FBD-Png/48/48/AvatarHeadshot/Png/noFilter' }
  ];

  // 1. DATA EVENT BONUS ITEM (Blade Ball - Radiant Veil)
  const eventBonusProducts = [
    { id: '3247', amount: '24.000', wasAmount: '22.500', bonus: '+ 1.500 more', priceDisplay: 'Rp 3,599M', isCta: false },
    { id: '3246', amount: '11.000', wasAmount: '10.000', bonus: '+ 1.000 more', priceDisplay: 'Rp 1,799M', isCta: false },
    { id: '3245', amount: '5.250', wasAmount: '4.500', bonus: '+ 750 more', priceDisplay: 'Rp 900K', isCta: false },
    { id: '4747', amount: '3.625', wasAmount: '3.150', bonus: '+ 475 more', priceDisplay: 'Rp 599K', isCta: false },
    { id: '3244', amount: '2.000', wasAmount: '1.700', bonus: '+ 300 more', priceDisplay: 'Rp 360K', isCta: false },
  ];

  // 2. DATA ROBUX PACKAGES
  const standardPackages = [
    { id: '4745', amount: '1.500', wasAmount: '1.200', bonus: '+ 300 more', priceDisplay: 'Rp 249K', badge: null, isCta: false },
    { id: '3243', amount: '1.000', wasAmount: '800', bonus: '+ 200 more', priceDisplay: 'Rp 180K', badge: null, isCta: false },
    { id: '3242', amount: '500', wasAmount: '400', bonus: '+ 100 more', priceDisplay: 'Rp 90K', badge: 'For you', isCta: true },
  ];

  const paymentMethods = ['QRIS (Semua E-Wallet)', 'DANA', 'GoPay', 'OVO', 'ShopeePay', 'BCA Virtual Account', 'Mandiri VA'];

  const faqs = [
    { q: 'What are Robux?', a: 'Robux is the virtual currency of Roblox that allows you to purchase upgrades for your avatar or buy special abilities in experiences.' },
    { q: 'Where are my Robux?', a: 'Once your purchase is completed, your Robux will be credited to your Roblox account balance instantly via automatic server payout or gamepass purchase.' },
    { q: 'Do Robux expire?', a: 'No, Robux never expire. Once added to your account, you can keep them for as long as you want.' },
    { q: 'How to redeem your gift card?', a: 'You can redeem your code in your account settings or directly on the Roblox redeem page to get instant balance.' }
  ];

  const handleCheckUser = () => {
    if (!username.trim()) return;
    setIsLoadingUser(true);
    setTimeout(() => {
      setUserData({
        displayName: username,
        username: username,
        userId: Math.floor(100000000 + Math.random() * 900000000),
        avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${username}`
      });
      setIsLoadingUser(false);
    }, 500);
  };

  const handleBuyClick = (pkg) => {
    setSelectedProduct(pkg);
    setShowCheckoutModal(true);
  };

  const filteredFriends = friendsList.filter(f => f.name.toLowerCase().includes(searchFriend.toLowerCase()));

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111216', color: '#ffffff', fontFamily: 'Hanken Grotesk, Arial, sans-serif' }}>
      {/* 1. TOP NAVBAR */}
      <header style={{ position: 'sticky', top: 0, zIndex: 40, backgroundColor: '#16181f', borderBottom: '1px solid #252836', padding: '14px 24px' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #0084dd, #00d2ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '18px', color: '#fff' }}>
              R
            </div>
            <span style={{ fontWeight: '800', fontSize: '19px', letterSpacing: '-0.5px' }}>
              ROBLOX <span style={{ color: '#00d2ff', fontSize: '11px', padding: '2px 8px', borderRadius: '12px', background: 'rgba(0,210,255,0.1)', border: '1px solid rgba(0,210,255,0.3)', marginLeft: '6px' }}>UPGRADES</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#191b24', border: '1px solid #282b3a', padding: '6px 14px', borderRadius: '999px' }}>
              <img src={userData.avatarUrl} alt="Avatar" style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#333' }} />
              <span style={{ fontWeight: '700', fontSize: '13px' }}>{userData.displayName}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#191b24', border: '1px solid #282b3a', padding: '6px 14px', borderRadius: '999px' }}>
              <RobuxHexIcon size={16} color="#fff" />
              <span style={{ fontWeight: '800', fontSize: '14px' }}>4</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTAINER */}
      <main style={{ maxWidth: '850px', margin: '0 auto', padding: '20px 16px 48px 16px' }}>

        {/* TRANSFERS BAR RESMI */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginBottom: '16px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '16px', 
            background: '#191b24', 
            border: '1px solid #282b3a', 
            padding: '8px 18px', 
            borderRadius: '999px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RobuxHexIcon size={20} color="#ffffff" />
              <span style={{ fontWeight: '900', fontSize: '20px', color: '#ffffff', letterSpacing: '-0.5px' }}>4</span>
            </div>

            <button 
              onClick={() => { setSelectedFriend(null); setShowSendModal(true); }}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                background: '#0084dd', 
                border: 'none', 
                color: '#ffffff', 
                fontWeight: '700', 
                fontSize: '13px', 
                padding: '7px 16px', 
                borderRadius: '8px', 
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(0,132,221,0.4)'
              }}
            >
              <ArrowUpFromLineIcon size={14} color="#ffffff" />
              <span>Send</span>
            </button>
          </div>
        </div>

        {/* Header Title */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', paddingTop: '12px', paddingBottom: '24px' }}>
          <h1 style={{ width: '100%', textAlign: 'center', fontSize: '38px', fontWeight: '900', letterSpacing: '-0.5px', color: '#ffffff', margin: 0, padding: 0 }}>
            Enjoy up to 25% more Robux
          </h1>
        </div>

        {/* Username Verification Bar */}
        <div style={{ background: '#191b24', border: '1px solid #282b3a', borderRadius: '16px', padding: '16px 20px', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={userData.avatarUrl} alt="User" style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#222' }} />
            <div>
              <div style={{ fontWeight: '800', fontSize: '15px' }}>{userData.displayName} <span style={{ color: '#8f95a3', fontSize: '12px', fontWeight: '400' }}>@{userData.username}</span></div>
              <div style={{ color: '#00b06f', fontSize: '12px', fontWeight: '600' }}>
                ✓ Akun Roblox Terverifikasi (ID: {userData.userId})
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username Roblox..." 
              style={{ background: '#111216', border: '1px solid #282b3a', borderRadius: '10px', padding: '8px 14px', color: '#fff', fontSize: '13px', outline: 'none' }}
            />
            <button 
              onClick={handleCheckUser}
              style={{ background: '#222533', border: '1px solid #383d54', color: '#fff', fontWeight: '700', fontSize: '12px', padding: '8px 16px', borderRadius: '10px', cursor: 'pointer' }}
            >
              {isLoadingUser ? '...' : 'Cek'}
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 1. SECTION: BONUS ITEM WE PICKED FOR YOU                 */}
        {/* ======================================================== */}
        <div style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '19px', fontWeight: '800', marginBottom: '14px' }}>
            Bonus item we picked for you
          </h2>

          <div style={{ background: '#191b24', border: '1px solid #282b3a', borderRadius: '18px', overflow: 'hidden' }}>
            {/* Banner Event Asli: Blade Ball - Radiant Veil */}
            <div style={{ 
              position: 'relative', 
              minHeight: '130px', 
              backgroundImage: 'url("https://tr.rbxcdn.com/180DAY-be150ba07c74cd57deb31791c2675323/768/432/Image/Png/noFilter")', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              display: 'flex', 
              alignItems: 'center', 
              padding: '16px 24px',
              borderBottom: '1px solid #282b3a'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(17,18,22,0.95) 0%, rgba(25,27,36,0.85) 50%, rgba(17,18,22,0.6) 100%)', zIndex: 1 }} />

              <div style={{ position: 'relative', zIndex: 2, width: '76px', height: '76px', borderRadius: '14px', background: '#0e1017', border: '2px solid rgba(168,85,247,0.5)', overflow: 'hidden', flexShrink: 0, marginRight: '18px', boxShadow: '0 8px 16px rgba(0,0,0,0.5)' }}>
                <img 
                  src="https://tr.rbxcdn.com/180DAY-4fbb9ca0d06f5e30ae301875fd944ce6/150/150/Image/Png/noFilter" 
                  alt="bonus item" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', color: '#c084fc' }}>
                  <span>Blade Ball</span>
                  <span style={{ fontSize: '11px', background: 'rgba(192,132,252,0.2)', padding: '1px 6px', borderRadius: '6px' }}>ⓘ</span>
                </div>
                <div style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.3px', marginTop: '2px' }}>
                  Radiant Veil
                </div>
              </div>
            </div>

            {/* List Tiers Event */}
            {eventBonusProducts.map((pkg) => (
              <div key={pkg.id} style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #222534' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '900', fontSize: '19px' }}>
                    <RobuxHexIcon size={22} color="#fff" />
                    {pkg.amount}
                  </div>

                  <div style={{ color: '#8f95a3', fontSize: '13px', textDecoration: 'line-through', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <RobuxHexIcon size={14} color="#8f95a3" />
                    {pkg.wasAmount}
                  </div>

                  <div style={{ background: '#25293a', border: '1px solid #383d54', color: '#00d2ff', fontSize: '11.5px', fontWeight: '700', padding: '3px 10px', borderRadius: '999px' }}>
                    {pkg.bonus}
                  </div>
                </div>

                <button 
                  onClick={() => handleBuyClick(pkg)}
                  style={{ background: '#202330', border: '1px solid #33384d', color: '#fff', fontWeight: '800', fontSize: '13px', padding: '10px 24px', borderRadius: '12px', cursor: 'pointer', minWidth: '120px' }}
                >
                  {pkg.priceDisplay}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. SECTION: ROBUX PACKAGES                                */}
        {/* ======================================================== */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '19px', fontWeight: '800', marginBottom: '14px' }}>
            Robux packages
          </h2>

          <div style={{ background: '#191b24', border: '1px solid #282b3a', borderRadius: '18px', overflow: 'hidden' }}>
            {standardPackages.map((pkg) => (
              <div key={pkg.id} style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #222534' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '900', fontSize: '19px' }}>
                    <RobuxHexIcon size={22} color="#fff" />
                    {pkg.amount}
                  </div>

                  <div style={{ color: '#8f95a3', fontSize: '13px', textDecoration: 'line-through', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <RobuxHexIcon size={14} color="#8f95a3" />
                    {pkg.wasAmount}
                  </div>

                  <div style={{ background: '#25293a', border: '1px solid #383d54', color: '#00d2ff', fontSize: '11.5px', fontWeight: '700', padding: '3px 10px', borderRadius: '999px' }}>
                    {pkg.bonus}
                  </div>

                  {pkg.badge && (
                    <div style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)', color: '#f59e0b', fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      ★ {pkg.badge}
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => handleBuyClick(pkg)}
                  style={{ 
                    background: pkg.isCta ? '#0084dd' : '#202330', 
                    border: pkg.isCta ? 'none' : '1px solid #33384d', 
                    color: '#fff', 
                    fontWeight: '800', 
                    fontSize: '13px', 
                    padding: '10px 24px', 
                    borderRadius: '12px', 
                    cursor: 'pointer', 
                    minWidth: '120px',
                    boxShadow: pkg.isCta ? '0 4px 14px rgba(0,132,221,0.4)' : 'none'
                  }}
                >
                  {pkg.priceDisplay}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. SECTION: FAQ                                          */}
        {/* ======================================================== */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '19px', fontWeight: '800', marginBottom: '14px' }}>FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: '#191b24', border: '1px solid #282b3a', borderRadius: '12px', overflow: 'hidden' }}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{ width: '100%', padding: '14px 18px', background: 'none', border: 'none', color: '#fff', fontWeight: '700', fontSize: '14px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                >
                  <span>{f.q}</span>
                  <span style={{ fontSize: '12px', color: '#8f95a3' }}>{activeFaq === i ? '▲' : '▼'}</span>
                </button>
                {activeFaq === i && (
                  <div style={{ padding: '0 18px 14px 18px', color: '#8f95a3', fontSize: '13px', lineHeight: '1.5' }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ======================================================== */}
      {/* SEND ROBUX MODAL WITH 21 REAL FRIENDS LIST               */}
      {/* ======================================================== */}
      {showSendModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 100 }}>
          <div style={{ background: '#191b24', border: '1px solid #2f344a', width: '100%', maxWidth: '440px', borderRadius: '18px', padding: '20px 24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', maxHeight: '85vh' }}>
            
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '14px', borderBottom: '1px solid #282b3a' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '900', fontSize: '18px', color: '#fff' }}>
                <span>Send Robux</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#111216', padding: '4px 10px', borderRadius: '999px', fontSize: '13px', fontWeight: '800' }}>
                  <RobuxHexIcon size={16} color="#fff" />
                  <span>4</span>
                </div>
                <button onClick={() => setShowSendModal(false)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '18px' }}>✕</button>
              </div>
            </div>

            {/* Search Input */}
            <div style={{ padding: '16px 0 10px 0' }}>
              <input 
                type="text" 
                value={searchFriend} 
                onChange={(e) => setSearchFriend(e.target.value)}
                placeholder="Search by username" 
                style={{ width: '100%', boxSizing: 'border-box', background: '#111216', border: '1px solid #282b3a', borderRadius: '10px', padding: '12px 14px', color: '#fff', fontSize: '14px', outline: 'none' }}
              />
            </div>

            <div style={{ fontSize: '14px', fontWeight: '800', color: '#ccc', marginBottom: '10px' }}>
              My friends ({filteredFriends.length})
            </div>

            {/* Friends List Box */}
            <div style={{ overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', paddingRight: '4px' }}>
              {filteredFriends.map((f, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedFriend(f)}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    padding: '8px 12px', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    background: selectedFriend?.name === f.name ? 'rgba(0,132,221,0.2)' : 'transparent',
                    border: selectedFriend?.name === f.name ? '1px solid #0084dd' : '1px solid transparent',
                    transition: 'all 0.15s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', overflow: 'hidden', background: '#25293a', flexShrink: 0 }}>
                      <img src={f.avatar} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontWeight: '700', fontSize: '14px', color: '#fff' }}>{f.name}</span>
                      {f.hasPlus && (
                        <span style={{ color: '#00d2ff', fontSize: '10px', fontWeight: '900', background: 'rgba(0,210,255,0.15)', border: '1px solid rgba(0,210,255,0.3)', padding: '1px 5px', borderRadius: '6px' }}>
                          +
                        </span>
                      )}
                    </div>
                  </div>

                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedFriend(f); setTransferSuccess(true); setTimeout(() => { setTransferSuccess(false); setShowSendModal(false); }, 1500); }}
                    style={{ background: '#0084dd', border: 'none', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer' }}
                  >
                    Send 4 R$
                  </button>
                </div>
              ))}
            </div>

            {/* Transfer Notification State */}
            {transferSuccess && (
              <div style={{ marginTop: '12px', background: 'rgba(0,176,111,0.2)', border: '1px solid #00b06f', color: '#00b06f', padding: '10px', borderRadius: '10px', textAlign: 'center', fontSize: '13px', fontWeight: '800' }}>
                ✓ Berhasil mentransfer 4 Robux ke {selectedFriend?.name}!
              </div>
            )}
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL */}
      {showCheckoutModal && selectedProduct && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 100 }}>
          <div style={{ background: '#161822', border: '1px solid #2f344a', width: '100%', maxWidth: '440px', borderRadius: '18px', padding: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{ fontWeight: '900', fontSize: '18px', color: '#fff' }}>Konfirmasi Pembelian</div>
              <button onClick={() => setShowCheckoutModal(false)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '18px' }}>✕</button>
            </div>

            <div style={{ background: '#1e2233', borderRadius: '12px', padding: '14px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#8f95a3', fontSize: '11px' }}>Paket Robux</div>
                <div style={{ fontWeight: '900', fontSize: '18px', color: '#fff' }}>{selectedProduct.amount} Robux</div>
                <div style={{ color: '#00d2ff', fontSize: '11px', fontWeight: '700' }}>{selectedProduct.bonus} Bonus Event</div>
              </div>
              <div style={{ textAlign: 'right', fontWeight: '900', fontSize: '18px', color: '#00b06f' }}>
                {selectedProduct.priceDisplay}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ color: '#ccc', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>Pilih Metode Pembayaran:</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {paymentMethods.map(m => (
                  <button 
                    key={m}
                    onClick={() => setPaymentMethod(m)}
                    style={{ background: paymentMethod === m ? 'rgba(0,132,221,0.2)' : '#191b24', border: paymentMethod === m ? '1.5px solid #0084dd' : '1px solid #292e42', borderRadius: '10px', padding: '10px', color: '#fff', fontSize: '11px', fontWeight: '700', textAlign: 'left', cursor: 'pointer' }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => { setShowCheckoutModal(false); setShowSuccessModal(true); }}
              style={{ width: '100%', padding: '14px', background: '#0084dd', border: 'none', color: '#fff', fontWeight: '800', fontSize: '14px', borderRadius: '12px', cursor: 'pointer' }}
            >
              Bayar Sekarang ({selectedProduct.priceDisplay})
            </button>
          </div>
        </div>
      )}

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 100 }}>
          <div style={{ background: '#161822', border: '1px solid #2f344a', width: '100%', maxWidth: '380px', borderRadius: '18px', padding: '28px', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,176,111,0.2)', border: '2px solid #00b06f', color: '#00b06f', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '28px' }}>
              ✓
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 8px 0' }}>Pesanan Sukses!</h3>
            <p style={{ color: '#8f95a3', fontSize: '13px', margin: '0 0 20px 0' }}>
              Robux sedang dikirimkan ke akun <strong style={{ color: '#fff' }}>@{userData.username}</strong> secara otomatis.
            </p>
            <button 
              onClick={() => setShowSuccessModal(false)}
              style={{ width: '100%', padding: '12px', background: '#222533', border: '1px solid #383d54', color: '#fff', fontWeight: '700', borderRadius: '10px', cursor: 'pointer' }}
            >
              Selesai
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
