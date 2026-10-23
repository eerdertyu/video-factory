import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';

const scenes = [
  {eyebrow:'ДЕНЬГИ В БЛОГИНГЕ', title:'Почему одни блогеры\nзарабатывают больше?', body:'Подписчики — не вся история.', accent:'#B8FF5C', tag:'СЕКРЕТ №1'},
  {eyebrow:'01 / АУДИТОРИЯ', title:'Доверие важнее\nмиллионов', body:'Узкая аудитория, которая верит автору, может стоить дороже случайных просмотров.', accent:'#65E4FF', tag:'КАЧЕСТВО > КОЛИЧЕСТВО'},
  {eyebrow:'02 / ПРЕДЛОЖЕНИЕ', title:'Не только реклама', body:'Собственные продукты, подписки и услуги дают больше контроля над доходом.', accent:'#FFCA65', tag:'СОЗДАЙ СВОЁ'},
  {eyebrow:'03 / УПАКОВКА', title:'Преврати внимание\nв действие', body:'Сильный первый кадр. Одна понятная мысль. Польза, которую хочется сохранить.', accent:'#FF7C9C', tag:'ХУК → ПОЛЬЗА → ДЕЙСТВИЕ'},
  {eyebrow:'04 / СИСТЕМА', title:'Доход любит\nсистемность', body:'Регулярный контент, несколько источников дохода и отношения с брендами.', accent:'#B8FF5C', tag:'НЕ ОДНА СДЕЛКА'},
  {eyebrow:'ГЛАВНЫЙ ВЫВОД', title:'Просмотры — это\nвнимание. Не деньги.', body:'Что зритель может купить или поддержать после просмотра?', accent:'#65E4FF', tag:'СТРОЙ МОДЕЛЬ ДОХОДА'}
];
const font = 'Arial, Helvetica, sans-serif';

const Scene: React.FC<{s: typeof scenes[number]; index: number}> = ({s,index}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const opacity = interpolate(frame,[0,12],[0,1],{extrapolateRight:'clamp'});
  const y = interpolate(frame,[0,18],[42,0],{extrapolateRight:'clamp'});
  const pulse = 1 + Math.sin(frame/10)*0.025;
  const progress = Math.min(100,(frame/(fps*10))*100);
  return <AbsoluteFill style={{background:'#080B14',color:'#F5F7FA',fontFamily:font,opacity,overflow:'hidden'}}>
    <AbsoluteFill style={{background:'radial-gradient(ellipse at ' + (20+index*11) + '% ' + (22+index*8) + '%, ' + s.accent + '22, transparent 45%)'}} />
    <div style={{position:'absolute',top:90,left:70,right:70,display:'flex',justifyContent:'space-between',fontSize:25,letterSpacing:4,color:'#A5ADBF',fontWeight:700}}>
      <span>CREATOR ECONOMY</span><span>0{index+1} / 06</span>
    </div>
    <div style={{position:'absolute',top:210,left:70,right:70,height:5,background:'#242A39',borderRadius:9}}>
      <div style={{width:((index+1)/6*100)+'%',height:'100%',background:s.accent,borderRadius:9}}/>
    </div>
    <div style={{position:'absolute',top:360,left:70,right:70,transform:'translateY('+y+'px) scale('+pulse+')',transformOrigin:'left top'}}>
      <div style={{fontSize:25,fontWeight:800,letterSpacing:5,color:s.accent,marginBottom:35}}>{s.eyebrow}</div>
      <div style={{fontSize:76,lineHeight:1.08,fontWeight:900,letterSpacing:-2,whiteSpace:'pre-line'}}>{s.title}</div>
      <div style={{width:140,height:10,background:s.accent,borderRadius:8,marginTop:45,marginBottom:35}}/>
      <div style={{fontSize:37,lineHeight:1.35,color:'#D0D5E2',maxWidth:900}}>{s.body}</div>
    </div>
    <div style={{position:'absolute',left:70,right:70,bottom:330}}>
      <div style={{border:'2px solid '+s.accent+'88',borderRadius:22,padding:'22px 28px',display:'inline-block',fontSize:24,fontWeight:900,letterSpacing:2,color:s.accent,background:'#101522'}}>{s.tag}</div>
      {index===2 && <div style={{display:'flex',alignItems:'end',gap:22,height:180,marginTop:45}}>
        {[55,85,120,155,180].map((h,i)=><div key={i} style={{height:h,width:90,borderRadius:'12px 12px 0 0',background:i===4?s.accent:'#3A465C',opacity:0.5+i*0.1}} />)}
      </div>}
      {index===5 && <div style={{marginTop:42,fontSize:28,fontWeight:800,color:'#F5F7FA'}}>ПОДПИШИСЬ • БОЛЬШЕ ПРАКТИКИ</div>}
    </div>
    <div style={{position:'absolute',bottom:90,left:70,right:70,display:'flex',justifyContent:'space-between',fontSize:22,color:'#778197',letterSpacing:2}}>
      <span>БЛОГЕР ≠ ПРОСТО ПРОСМОТРЫ</span><span>SHORTS</span>
    </div>
    <div style={{position:'absolute',bottom:0,left:0,height:10,width:progress+'%',background:s.accent}}/>
  </AbsoluteFill>;
};

export const BloggerEarnings: React.FC = () => (
  <AbsoluteFill style={{background:'#080B14'}}>
    {scenes.map((s,i)=><Sequence key={s.eyebrow} from={i*300} durationInFrames={300}><Scene s={s} index={i}/></Sequence>)}
    <Audio src={staticFile('voice.mp3')} volume={1}/>
  </AbsoluteFill>
);
