function CustomButton() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
      Click Me
    </button>
  );
}

export default CustomButton;