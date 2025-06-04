export const SkillBar=({value,label}:{value:number,label:string})=>{
  return (
    <div>
      <span className="gradient-heading capitalize">{label}</span>
      <div className={`bg-main-blue/40  h-4 p-1 rounded-full overflow-hidden relative`}>
      <div className={`bg-gradient-to-r  to-main-purple/70 h-full rounded-full`}
      style={{width:value+"%"}} />
    </div>
    </div>
  );
}