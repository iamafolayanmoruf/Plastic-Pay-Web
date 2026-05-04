export function PhoneMockup() {
  return (
    <div className="phone-shell" aria-hidden>
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-header">
          <div className="phone-header-small">Wallet</div>
          <div className="phone-balance-label">Total coins</div>
          <div className="phone-balance">12,847</div>
          <div className="phone-pending">842 pending confirmation</div>
        </div>
        <div className="phone-body">
          <div className="phone-card">
            <div className="phone-card-title">Deposit code</div>
            <div className="phone-code-row">
              <span className="phone-code">PP-7XK2 · 9QM4</span>
              <span className="phone-pill">Copy</span>
            </div>
          </div>
          <div className="phone-list">
            <div className="phone-scan-row">
              <div className="phone-scan-icon" />
              <div className="phone-scan-meta">
                <div className="phone-scan-title">PET bottle</div>
                <div className="phone-scan-sub">+5 coins</div>
              </div>
              <span className="phone-pill" style={{ flexShrink: 0 }}>
                Scanned
              </span>
            </div>
            <div className="phone-scan-row">
              <div className="phone-scan-icon" />
              <div className="phone-scan-meta">
                <div className="phone-scan-title">Aluminium can</div>
                <div className="phone-scan-sub">+7 coins</div>
              </div>
              <span className="phone-pill" style={{ flexShrink: 0 }}>
                Scanned
              </span>
            </div>
          </div>
        </div>
        <div className="phone-tabbar">
          <div className="phone-tab active">Wallet</div>
          <div className="phone-tab">Scan</div>
          <div className="phone-tab">Map</div>
          <div className="phone-tab">Profile</div>
        </div>
      </div>
    </div>
  )
}
