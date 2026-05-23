const SectionDivider = ({ centered = false }) => {
  return (
    <div className={`section-divider mb-6 ${centered ? 'mx-auto' : ''}`}></div>
  );
};

export default SectionDivider;
