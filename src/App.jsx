import React, { useState } from 'react';

// Ikon Resmi Roblox Foundation Web: icon-filled-robux
const RobuxHexIcon = ({ size = 20, color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color} 
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    aria-hidden="true"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M5.657 2.243A3 3 0 003.536 4.364L.607 11.435a3 3 0 000 2.263l2.929 7.071a3 3 0 002.121 2.121l7.071 2.929a3 3 0 002.263 0l7.071-2.929a3 3 0 002.121-2.121l2.929-7.071a3 3 0 000-2.263l-2.929-7.071a3 3 0 00-2.121-2.121L14.992.443a3 3 0 00-2.263 0L5.657 2.243zm3.757 7.172a1.5 1.5 0 011.06-.439h3.052a1.5 1.5 0 011.06.439l2.158 2.158a1.5 1.5 0 010 2.121l-2.158 2.158a1.5 1.5 0 01-1.06.439h-3.052a1.5 1.5 0 01-1.06-.439l-2.158-2.158a1.5 1.5 0 010-2.121l2.158-2.158z" 
    />
  </svg>
);

// Ikon Arrow Up From Line
const ArrowUpFromLineIcon = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
    <path d="M18 9l-6-6-6 6" />
    <path d="M12 3v14" />
    <path d="M5 21h14" />
  </svg>
);

// Ikon Sidebar Menu
const SidebarIcons = {
  Home: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Profile: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Plus: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0084dd" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
  Messages: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  Friends: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Avatar: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="12" y1="14" x2="9" y2="21"/><line x1="12" y1="14" x2="15" y2="21"/></svg>,
  Inventory: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  Trade: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
  Communities: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Blog: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>,
  Store: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l1 10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2l1-10"/><path d="M3 9h18"/><path d="M16 5V3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
  GiftCards: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="12" rx="2"/><line x1="12" y1="8" x2="12" y2="20"/><path d="M19 12h-7"/></svg>
};

export default function App() {
  const [inputUsername, setInputUsername] = useState('safana_bott');
  const [userData, setUserData] = useState({
    displayName: 'sfnaaa',
    username: 'safana_bott',
    userId: 3193274552,
    avatarUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-A3F52DFB93D254C88D18AF067D26F835-Png/150/150/AvatarHeadshot/Webp/noFilter',
    joinedYear: '2022'
  });
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('QRIS');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Send Modals State (Step 1: Friends Sheet, Step 2: In-Game Send Modal)
  const [showFriendsSheet, setShowFriendsSheet] = useState(false);
  const [showInGameSendModal, setShowInGameSendModal] = useState(false);
  const [searchFriend, setSearchFriend] = useState('');
  const [targetFriend, setTargetFriend] = useState({
    displayName: 'Yans',
    username: 'nayah840',
    avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-DB939CC544B41B36CF4EC1C7D93F7756-Png/150/150/AvatarHeadshot/Png/noFilter',
    joinedYear: '2024'
  });
  const [transferAmount, setTransferAmount] = useState('50');
  const [transferSuccess, setTransferSuccess] = useState(false);

  // Daftar 21 Teman Asli dari HTML
  const friendsList = [
    { name: 'Ame', hasPlus: true, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-DB939CC544B41B36CF4EC1C7D93F7756-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'CaLLmE_We1rdO', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-CECF12B715F0C0BC18500DB16FF1F712-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'acetaminophen', hasPlus: false, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-22FA3A2713A190AAD10DAF09F02A33A7-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: 'Mobkeyy', hasPlus: true, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-59B03D17523D4196C067037C2B126EF1-Png/48/48/AvatarHeadshot/Png/noFilter' },
    { name: '特西可愛', hasPlus: true, avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-23ACFAE8F81281AC903C9646F6D0D88A-Png/48/48/AvatarHeadshot/Png/noFilter' },
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

  // Data Paket Bonus Event Blade Ball (Radiant Veil)
  const eventBonusProducts = [
    { id: '3247', amount: '24.000', wasAmount: '22.500', bonus: '+ 1.500 more', priceDisplay: 'Rp 3,599M' },
    { id: '3246', amount: '11.000', wasAmount: '10.000', bonus: '+ 1.000 more', priceDisplay: 'Rp 1,799M' },
    { id: '3245', amount: '5.250', wasAmount: '4.500', bonus: '+ 750 more', priceDisplay: 'Rp 900K' },
    { id: '4747', amount: '3.625', wasAmount: '3.150', bonus: '+ 475 more', priceDisplay: 'Rp 599K' },
    { id: '3244', amount: '2.000', wasAmount: '1.700', bonus: '+ 300 more', priceDisplay: 'Rp 360K' },
  ];

  // Data Paket Reguler
  const standardPackages = [
    { id: '4745', amount: '1.500', wasAmount: '1.200', bonus: '+ 300 more', priceDisplay: 'Rp 249K', badge: null },
    { id: '3243', amount: '1.000', wasAmount: '800', bonus: '+ 200 more', priceDisplay: 'Rp 180K', badge: null },
    { id: '3242', amount: '500', wasAmount: '400', bonus: '+ 100 more', priceDisplay: 'Rp 90K', badge: 'For you', isCta: true },
  ];

  const paymentMethods = ['QRIS (Semua E-Wallet)', 'DANA', 'GoPay', 'OVO', 'ShopeePay', 'BCA Virtual Account', 'Mandiri VA'];

  const faqs = [
    { q: 'What are Robux?', a: 'Robux is the virtual currency of Roblox that allows you to purchase upgrades for your avatar or buy special abilities in experiences.' },
    { q: 'Where are my Robux?', a: 'Once your purchase is completed, your Robux will be credited to your Roblox account balance instantly via automatic server payout or gamepass purchase.' },
    { q: 'Do Robux expire?', a: 'No, Robux never expire. Once added to your account, you can keep them for as long as you want.' },
    { q: 'How to redeem your gift card?', a: 'You can redeem your code in your account settings or directly on the Roblox redeem page to get instant balance.' }
  ];

  // API RESMI ROBLOX: Fetch Data & Avatar Headshot Asli
  const handleCheckUser = async () => {
    if (!inputUsername.trim()) return;
    setIsLoadingUser(true);
    try {
      const userRes = await fetch('https://users.roproxy.com/v1/usernames/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernames: [inputUsername.trim()], excludeBannedUsers: false })
      });
      const userDataRes = await userRes.json();

      if (userDataRes.data && userDataRes.data.length > 0) {
        const user = userDataRes.data[0];
        const uId = user.id;
        const dName = user.displayName || user.name;
        const uName = user.name;

        const thumbRes = await fetch(`https://thumbnails.roproxy.com/v1/users/avatar-headshot?userIds=${uId}&size=150x150&format=Png&isCircular=false`);
        const thumbData = await thumbRes.json();
        const avatar = (thumbData.data && thumbData.data[0]?.imageUrl) 
          ? thumbData.data[0].imageUrl 
          : `https://images.rbxcdn.com/905bd722ee0a6ceda3caacde54c0b081.png`;

        setUserData({
          displayName: dName,
          username: uName,
          userId: uId,
          avatarUrl: avatar,
          joinedYear: '2024'
        });
      } else {
        setUserData({
          displayName: inputUsername,
          username: inputUsername,
          userId: Math.floor(100000000 + Math.random() * 900000000),
          avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${inputUsername}`,
          joinedYear: '2024'
        });
      }
    } catch (err) {
      console.warn("Roblox API fetch fallback:", err);
      setUserData({
        displayName: inputUsername,
        username: inputUsername,
        userId: 3193274552,
        avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${inputUsername}`,
        joinedYear: '2024'
      });
    } finally {
      setIsLoadingUser(false);
    }
  };

  const handleSelectFriend = (f) => {
    setTargetFriend({
      displayName: f.name,
      username: f.name.toLowerCase().replace(/\s+/g, '_'),
      avatar: f.avatar,
      joinedYear: '2024'
    });
    setShowFriendsSheet(false);
    setShowInGameSendModal(true);
  };

  const handleBuyClick = (pkg) => {
    setSelectedProduct(pkg);
    setShowCheckoutModal(true);
  };

  const filteredFriends = friendsList.filter(f => f.name.toLowerCase().includes(searchFriend.toLowerCase()));
  const calculatedReceived = Math.max(1, Math.floor(Number(transferAmount || 0) * 0.9));

  return (
    // TEMA PUTIH BERSIH + SIDEBAR PERSIS RESMI ROBLOX
    <div style={{ minHeight: '100vh', backgroundColor: '#f2f4f5', color: '#191b24', fontFamily: 'Hanken Grotesk, -apple-system, BlinkMacSystemFont, Arial, sans-serif' }}>
      
      {/* 1. TOP NAVBAR RESMI */}
      <header style={{ position: 'sticky', top: 0, zIndex: 40, backgroundColor: '#ffffff', borderBottom: '1px solid #e3e5e8', padding: '10px 20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #0084dd, #00a2ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '18px', color: '#fff' }}>
              R
            </div>
            <span style={{ fontWeight: '800', fontSize: '19px', letterSpacing: '-0.5px', color: '#191b24' }}>
              ROBLOX <span style={{ color: '#0084dd', fontSize: '11px', padding: '2px 8px', borderRadius: '12px', background: 'rgba(0,132,221,0.08)', border: '1px solid rgba(0,132,221,0.2)', marginLeft: '6px' }}>UPGRADES</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f2f4f5', border: '1px solid #e3e5e8', padding: '5px 12px', borderRadius: '999px' }}>
              <img src={userData.avatarUrl} alt="Avatar" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
              <span style={{ fontWeight: '700', fontSize: '13px', color: '#191b24' }}>{userData.displayName}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#f2f4f5', border: '1px solid #e3e5e8', padding: '5px 12px', borderRadius: '999px' }}>
              <RobuxHexIcon size={16} color="#191b24" />
              <span style={{ fontWeight: '800', fontSize: '14px', color: '#191b24' }}>4</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. LAYOUT: SIDEBAR + MAIN CONTENT */}
      <div style={{ display: 'flex', maxWidth: '1400px', margin: '0 auto', padding: '0 16px' }}>
        
        {/* SIDEBAR NAVIGATION ELEMEN RESMI */}
        <nav style={{ width: '210px', flexShrink: 0, padding: '20px 8px 40px 0', borderRight: '1px solid #e3e5e8', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {/* Profile Item */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '10px', cursor: 'pointer', background: '#e9ecef', fontWeight: '800', fontSize: '14px', color: '#191b24' }}>
            <img src={userData.avatarUrl} alt="avatar" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>{userData.displayName}</span>
              <span style={{ color: '#0084dd', fontSize: '10px', fontWeight: '900', background: 'rgba(0,132,221,0.1)', padding: '1px 4px', borderRadius: '4px' }}>+</span>
            </div>
          </div>

          <div style={{ height: '1px', background: '#e3e5e8', margin: '6px 0' }} />

          {/* Nav Items */}
          {[
            { label: 'Home', icon: SidebarIcons.Home },
            { label: 'Profile', icon: SidebarIcons.Profile },
            { label: 'Roblox Plus', icon: SidebarIcons.Plus },
            { label: 'Messages', icon: SidebarIcons.Messages, badge: '114' },
            { label: 'Friends', icon: SidebarIcons.Friends, badge: '409' },
            { label: 'Avatar', icon: SidebarIcons.Avatar },
            { label: 'Inventory', icon: SidebarIcons.Inventory },
            { label: 'Trade', icon: SidebarIcons.Trade },
            { label: 'Communities', icon: SidebarIcons.Communities },
            { label: 'Blog', icon: SidebarIcons.Blog },
            { label: 'Official Store', icon: SidebarIcons.Store },
            { label: 'Buy Gift Cards', icon: SidebarIcons.GiftCards }
          ].map((item, idx) => (
            <div 
              key={idx}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '8px 12px', 
                borderRadius: '8px', 
                cursor: 'pointer',
                color: '#393b3d',
                fontSize: '13.5px',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e9ecef'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <item.icon />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span style={{ background: '#191b24', color: '#fff', fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '999px' }}>
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* MAIN BODY CONTENT */}
        <main style={{ flex: 1, padding: '20px 24px 48px 32px', maxWidth: '850px' }}>

          {/* TRANSFERS BAR RESMI */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginBottom: '16px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '14px', 
              background: '#ffffff', 
              border: '1px solid #e3e5e8', 
              padding: '6px 16px', 
              borderRadius: '999px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <RobuxHexIcon size={20} color="#191b24" />
                <span style={{ fontWeight: '900', fontSize: '19px', color: '#191b24' }}>4</span>
              </div>

              {/* KLIK SEND MEMBUKA MODAL SHEET MY FRIENDS (21) */}
              <button 
                onClick={() => { setSearchFriend(''); setShowFriendsSheet(true); }}
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
                  boxShadow: '0 2px 6px rgba(0,132,221,0.3)'
                }}
              >
                <ArrowUpFromLineIcon size={14} color="#ffffff" />
                <span>Send</span>
              </button>
            </div>
          </div>

          {/* Header Title */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', paddingTop: '8px', paddingBottom: '20px' }}>
            <h1 style={{ width: '100%', textAlign: 'center', fontSize: '36px', fontWeight: '900', letterSpacing: '-0.5px', color: '#191b24', margin: 0 }}>
              Enjoy up to 25% more Robux
            </h1>
          </div>

          {/* USERNAME VERIFICATION BAR (TERHUBUNG KE API ROBLOX) */}
          <div style={{ background: '#ffffff', border: '1px solid #e3e5e8', borderRadius: '16px', padding: '16px 20px', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', overflow: 'hidden', background: '#e3e5e8', flexShrink: 0 }}>
                <img src={userData.avatarUrl} alt="User Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '16px', color: '#191b24' }}>
                  {userData.displayName} <span style={{ color: '#8f95a3', fontSize: '13px', fontWeight: '400' }}>@{userData.username}</span>
                </div>
                <div style={{ color: '#00b06f', fontSize: '12.5px', fontWeight: '600' }}>
                  ✓ Akun Roblox Terhubung (ID: {userData.userId})
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="text" 
                value={inputUsername} 
                onChange={(e) => setInputUsername(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCheckUser()}
                placeholder="Ketik Username Roblox..." 
                style={{ background: '#f8f9fa', border: '1px solid #dcdfe4', borderRadius: '10px', padding: '10px 14px', color: '#191b24', fontSize: '13px', outline: 'none', minWidth: '180px' }}
              />
              <button 
                onClick={handleCheckUser}
                disabled={isLoadingUser}
                style={{ background: '#0084dd', border: 'none', color: '#fff', fontWeight: '700', fontSize: '13px', padding: '10px 18px', borderRadius: '10px', cursor: 'pointer' }}
              >
                {isLoadingUser ? 'Cari...' : 'Cek'}
              </button>
            </div>
          </div>

          {/* 1. SECTION: BONUS ITEM WE PICKED FOR YOU */}
          <div style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '14px', color: '#191b24' }}>
              Bonus item we picked for you
            </h2>

            <div style={{ background: '#ffffff', border: '1px solid #e3e5e8', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              {/* Banner Event: Blade Ball - Radiant Veil */}
              <div style={{ 
                position: 'relative', 
                minHeight: '130px', 
                backgroundImage: 'url("https://tr.rbxcdn.com/180DAY-be150ba07c74cd57deb31791c2675323/768/432/Image/Png/noFilter")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                display: 'flex', 
                alignItems: 'center', 
                padding: '16px 24px',
                borderBottom: '1px solid #e3e5e8'
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(25,27,36,0.92) 0%, rgba(25,27,36,0.75) 50%, rgba(25,27,36,0.4) 100%)', zIndex: 1 }} />

                <div style={{ position: 'relative', zIndex: 2, width: '76px', height: '76px', borderRadius: '14px', background: '#0e1017', border: '2px solid rgba(168,85,247,0.5)', overflow: 'hidden', flexShrink: 0, marginRight: '18px', boxShadow: '0 8px 16px rgba(0,0,0,0.4)' }}>
                  <img 
                    src="https://tr.rbxcdn.com/180DAY-4fbb9ca0d06f5e30ae301875fd944ce6/150/150/Image/Png/noFilter" 
                    alt="bonus item" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', color: '#d8b4fe' }}>
                    <span>Blade Ball</span>
                    <span style={{ fontSize: '11px', background: 'rgba(192,132,252,0.25)', padding: '1px 6px', borderRadius: '6px', color: '#fff' }}>ⓘ</span>
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.3px', marginTop: '2px' }}>
                    Radiant Veil
                  </div>
                </div>
              </div>

              {/* List Tiers Event */}
              {eventBonusProducts.map((pkg) => (
                <div key={pkg.id} style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f2f4f5' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '900', fontSize: '19px', color: '#191b24' }}>
                      <RobuxHexIcon size={22} color="#191b24" />
                      {pkg.amount}
                    </div>

                    <div style={{ color: '#8f95a3', fontSize: '13px', textDecoration: 'line-through', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <RobuxHexIcon size={14} color="#8f95a3" />
                      {pkg.wasAmount}
                    </div>

                    <div style={{ background: '#eef2f6', border: '1px solid #dce2ea', color: '#0084dd', fontSize: '11.5px', fontWeight: '700', padding: '3px 10px', borderRadius: '999px' }}>
                      {pkg.bonus}
                    </div>
                  </div>

                  <button 
                    onClick={() => handleBuyClick(pkg)}
                    style={{ background: '#f2f4f5', border: '1px solid #e3e5e8', color: '#191b24', fontWeight: '800', fontSize: '13px', padding: '10px 24px', borderRadius: '12px', cursor: 'pointer', minWidth: '120px' }}
                  >
                    {pkg.priceDisplay}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 2. SECTION: ROBUX PACKAGES */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '14px', color: '#191b24' }}>
              Robux packages
            </h2>

            <div style={{ background: '#ffffff', border: '1px solid #e3e5e8', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              {standardPackages.map((pkg) => (
                <div key={pkg.id} style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f2f4f5' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '900', fontSize: '19px', color: '#191b24' }}>
                      <RobuxHexIcon size={22} color="#191b24" />
                      {pkg.amount}
                    </div>

                    <div style={{ color: '#8f95a3', fontSize: '13px', textDecoration: 'line-through', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <RobuxHexIcon size={14} color="#8f95a3" />
                      {pkg.wasAmount}
                    </div>

                    <div style={{ background: '#eef2f6', border: '1px solid #dce2ea', color: '#0084dd', fontSize: '11.5px', fontWeight: '700', padding: '3px 10px', borderRadius: '999px' }}>
                      {pkg.bonus}
                    </div>

                    {pkg.badge && (
                      <div style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)', color: '#d97706', fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        ★ {pkg.badge}
                      </div>
                    )}
                  </div>

                  <button 
                    onClick={() => handleBuyClick(pkg)}
                    style={{ 
                      background: pkg.isCta ? '#0084dd' : '#f2f4f5', 
                      border: pkg.isCta ? 'none' : '1px solid #e3e5e8', 
                      color: pkg.isCta ? '#fff' : '#191b24', 
                      fontWeight: '800', 
                      fontSize: '13px', 
                      padding: '10px 24px', 
                      borderRadius: '12px', 
                      cursor: 'pointer', 
                      minWidth: '120px',
                      boxShadow: pkg.isCta ? '0 4px 12px rgba(0,132,221,0.3)' : 'none'
                    }}
                  >
                    {pkg.priceDisplay}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 3. SECTION: FAQ */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '14px', color: '#191b24' }}>FAQ</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ background: '#ffffff', border: '1px solid #e3e5e8', borderRadius: '12px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    style={{ width: '100%', padding: '16px 20px', background: 'none', border: 'none', color: '#191b24', fontWeight: '700', fontSize: '15px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                  >
                    <span>{f.q}</span>
                    <span style={{ fontSize: '12px', color: '#8f95a3' }}>{activeFaq === i ? '▲' : '▼'}</span>
                  </button>
                  {activeFaq === i && (
                    <div style={{ padding: '0 20px 16px 20px', color: '#555', fontSize: '14px', lineHeight: '1.6' }}>
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* ========================================================================= */}
      {/* 1. SEND ROBUX SHEET MODAL (MY FRIENDS 21 - SESUAI KODE HTML USER)          */}
      {/* ========================================================================= */}
      {showFriendsSheet && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 100 }}>
          <div style={{ background: '#232527', border: '1px solid #393b3d', width: '100%', maxWidth: '420px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.6)', color: '#fff', display: 'flex', flexDirection: 'column', maxHeight: '85vh' }}>
            
            {/* Sheet Header */}
            <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #333538' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '16px', color: '#fff' }}>
                <RobuxHexIcon size={18} color="#fff" />
                <span>Send Robux</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '800', color: '#fff' }}>
                  <RobuxHexIcon size={14} color="#fff" />
                  <span>4</span>
                </div>
                <button onClick={() => setShowFriendsSheet(false)} style={{ background: 'none', border: 'none', color: '#a0a2a5', cursor: 'pointer', fontSize: '16px', padding: 0 }}>✕</button>
              </div>
            </div>

            {/* Sticky Search & Title */}
            <div style={{ padding: '14px 18px 8px 18px', background: '#232527', position: 'sticky', top: 0, zIndex: 5 }}>
              <input 
                type="search" 
                value={searchFriend} 
                onChange={(e) => setSearchFriend(e.target.value)}
                placeholder="Search by username" 
                style={{ width: '100%', boxSizing: 'border-box', background: '#18191c', border: '1px solid #393b3d', borderRadius: '8px', padding: '10px 14px', color: '#fff', fontSize: '13px', outline: 'none' }}
              />
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#d1d3d6', marginTop: '12px' }}>
                My friends ({filteredFriends.length})
              </div>
            </div>

            {/* Friends List Box */}
            <div style={{ overflowY: 'auto', flex: 1, padding: '4px 10px 14px 10px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {filteredFriends.map((f, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleSelectFriend(f)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '10px', cursor: 'pointer', transition: 'background 0.15s' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#2c2e30'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', overflow: 'hidden', background: '#393b3d', flexShrink: 0 }}>
                      <img src={f.avatar} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontWeight: '700', fontSize: '13.5px', color: '#ffffff' }}>{f.name}</span>
                      {f.hasPlus && (
                        <span style={{ color: '#0084dd', fontSize: '10px', fontWeight: '900', background: 'rgba(0,132,221,0.15)', border: '1px solid rgba(0,132,221,0.3)', padding: '1px 5px', borderRadius: '4px' }}>
                          +
                        </span>
                      )}
                    </div>
                  </div>

                  <span style={{ color: '#0084dd', fontSize: '12px', fontWeight: '700' }}>Select →</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. IN-GAME SEND ROBUX CONFIRMATION MODAL (PERSIS 100% SEPERTI GAMBAR KE-2) */}
      {/* ========================================================================= */}
      {showInGameSendModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 101 }}>
          <div style={{ 
            background: '#232527', 
            border: '1px solid #393b3d', 
            width: '100%', 
            maxWidth: '380px', 
            borderRadius: '16px', 
            padding: '20px 20px 16px 20px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)', 
            color: '#ffffff'
          }}>
            
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '16px', color: '#ffffff' }}>
                <RobuxHexIcon size={18} color="#fff" />
                <span>Send Robux</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fff', fontSize: '13px', fontWeight: '800' }}>
                  <RobuxHexIcon size={14} color="#fff" />
                  <span>166</span>
                </div>
                <button 
                  onClick={() => setShowInGameSendModal(false)} 
                  style={{ background: 'none', border: 'none', color: '#a0a2a5', cursor: 'pointer', fontSize: '16px', padding: 0 }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Recipient Profile Card (Persis Gambar 2) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '12px 0 16px 0' }}>
              <div style={{ width: '68px', height: '68px', borderRadius: '50%', overflow: 'hidden', background: '#393b3d', marginBottom: '10px', border: '2px solid rgba(255,255,255,0.1)' }}>
                <img 
                  src={targetFriend.avatar} 
                  alt="Recipient" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ fontWeight: '800', fontSize: '16px', color: '#ffffff' }}>
                {targetFriend.displayName}
              </div>
              <div style={{ color: '#a0a2a5', fontSize: '13px', marginBottom: '10px' }}>
                @{targetFriend.username}
              </div>
              
              {/* Mutual friends & Joined Year */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#a0a2a5', fontSize: '11.5px' }}>
                <span>👥 0 mutual Friends</span>
                <span>ⓘ Joined in {targetFriend.joinedYear}</span>
              </div>
            </div>

            {/* Amount Box */}
            <div style={{ background: '#2c2e30', borderRadius: '12px', padding: '16px', textAlign: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '32px', fontWeight: '900', color: '#ffffff', marginBottom: '6px' }}>
                <RobuxHexIcon size={28} color="#ffffff" />
                <input 
                  type="number" 
                  value={transferAmount} 
                  onChange={(e) => setTransferAmount(e.target.value)}
                  style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '32px', fontWeight: '900', width: '100px', textAlign: 'center', outline: 'none' }}
                />
              </div>
              <div style={{ color: '#a0a2a5', fontSize: '11px', lineHeight: '1.4' }}>
                The recipient will get {calculatedReceived} Robux after fees. In-game transfers include a 10% creator fee.
              </div>
            </div>

            {/* Send Button */}
            <button 
              onClick={() => {
                setTransferSuccess(true);
                setTimeout(() => {
                  setTransferSuccess(false);
                  setShowInGameSendModal(false);
                }, 1800);
              }}
              style={{ 
                width: '100%', 
                padding: '12px', 
                background: '#3977f6', 
                border: 'none', 
                color: '#ffffff', 
                fontWeight: '800', 
                fontSize: '14px', 
                borderRadius: '8px', 
                cursor: 'pointer',
                marginBottom: '12px',
                transition: 'background 0.2s'
              }}
            >
              {transferSuccess ? '✓ Transfer Sent!' : 'Send'}
            </button>

            {/* Footer Disclaimer */}
            <div style={{ color: '#8a8c8e', fontSize: '9.5px', textAlign: 'center', lineHeight: '1.3' }}>
              You need an age check or parental consent to send Robux. Once you send, you cannot cancel.
            </div>
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL */}
      {showCheckoutModal && selectedProduct && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 100 }}>
          <div style={{ background: '#ffffff', border: '1px solid #e3e5e8', width: '100%', maxWidth: '420px', borderRadius: '18px', padding: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', color: '#191b24' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{ fontWeight: '900', fontSize: '18px' }}>Konfirmasi Pembelian</div>
              <button onClick={() => setShowCheckoutModal(false)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '18px' }}>✕</button>
            </div>

            <div style={{ background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '12px', padding: '14px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#8f95a3', fontSize: '11px' }}>Paket Robux</div>
                <div style={{ fontWeight: '900', fontSize: '18px', color: '#191b24' }}>{selectedProduct.amount} Robux</div>
                <div style={{ color: '#0084dd', fontSize: '11px', fontWeight: '700' }}>{selectedProduct.bonus} Bonus Event</div>
              </div>
              <div style={{ textAlign: 'right', fontWeight: '900', fontSize: '18px', color: '#00b06f' }}>
                {selectedProduct.priceDisplay}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ color: '#444', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>Pilih Metode Pembayaran:</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {paymentMethods.map(m => (
                  <button 
                    key={m}
                    onClick={() => setPaymentMethod(m)}
                    style={{ background: paymentMethod === m ? 'rgba(0,132,221,0.08)' : '#f8f9fa', border: paymentMethod === m ? '1.5px solid #0084dd' : '1px solid #e3e5e8', borderRadius: '10px', padding: '10px', color: '#191b24', fontSize: '11px', fontWeight: '700', textAlign: 'left', cursor: 'pointer' }}
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
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 100 }}>
          <div style={{ background: '#ffffff', border: '1px solid #e3e5e8', width: '100%', maxWidth: '380px', borderRadius: '18px', padding: '28px', textAlign: 'center', color: '#191b24' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,176,111,0.1)', border: '2px solid #00b06f', color: '#00b06f', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '28px' }}>
              ✓
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 8px 0' }}>Pesanan Sukses!</h3>
            <p style={{ color: '#666', fontSize: '13px', margin: '0 0 20px 0' }}>
              Robux sedang dikirimkan ke akun <strong style={{ color: '#191b24' }}>@{userData.username}</strong> secara otomatis.
            </p>
            <button 
              onClick={() => setShowSuccessModal(false)}
              style={{ width: '100%', padding: '12px', background: '#f2f4f5', border: '1px solid #e3e5e8', color: '#191b24', fontWeight: '700', borderRadius: '10px', cursor: 'pointer' }}
            >
              Selesai
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
