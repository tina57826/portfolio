
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2eb2d8d2-689a-4376-bebe-ae7778ae32fe",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert('感謝您的聯繫，信件已成功送達！');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('送出失敗，請稍後再試。');
      }
    } catch (error) {
      alert('網路連線異常，請檢查網路。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-700">
      <h1 className="text-6xl font-light serif mb-16">與我們對話</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="group border-b border-neutral-200 focus-within:border-black transition-colors">
              <label className="text-[10px] tracking-widest uppercase text-neutral-400 group-focus-within:text-black block mb-2 transition-colors">您的姓名 Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-transparent py-4 text-lg outline-none font-light"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="group border-b border-neutral-200 focus-within:border-black transition-colors">
              <label className="text-[10px] tracking-widest uppercase text-neutral-400 group-focus-within:text-black block mb-2 transition-colors">電子郵件 Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-transparent py-4 text-lg outline-none font-light"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div className="group border-b border-neutral-200 focus-within:border-black transition-colors">
              <label className="text-[10px] tracking-widest uppercase text-neutral-400 group-focus-within:text-black block mb-2 transition-colors">訊息 Message</label>
              <textarea 
                rows={4}
                required
                className="w-full bg-transparent py-4 text-lg outline-none font-light resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-12 py-4 bg-black text-white text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors disabled:bg-neutral-400"
            >
              {isSubmitting ? '傳送中 SENDING...' : '送出訊息 SEND MESSAGE'}
            </button>
          </form>
        </div>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-6">聯繫資訊 Contact Info</h3>
            <div className="space-y-4 text-lg font-light text-neutral-600">
              <p>tina57826@gmail.com</p>
              <p>+886 925 024 448</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-6">社交媒體 Social</h3>
            <div className="flex flex-col space-y-2 text-sm font-light text-neutral-500">
              <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;