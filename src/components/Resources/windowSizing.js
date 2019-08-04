// https://github.com/Swizec/useDimensions
function getDimensionObject(node) {
  const rect = node.getBoundingClientRect();

  return {
      width: rect.width,
      height: rect.height,
      top: "x" in rect ? rect.x : rect.top,
      left: "y" in rect ? rect.y : rect.left,
      x: "x" in rect ? rect.x : rect.left,
      y: "y" in rect ? rect.y : rect.top,
      right: rect.right,
      bottom: rect.bottom
  };
}

function useDimensions({ liveMeasure = true }) {
  const [dimensions, setDimensions] = useState({width: 960, height: 500});
  const [node, setNode] = useState(null);

  const svgRef = useCallback(node => {
      setNode(node);
  }, []);

  useLayoutEffect(() => {
      if (node) {
          const measure = () =>
              window.requestAnimationFrame(() => {
                let {width, height} = getDimensionObject(node)
                setDimensions({ 
                  width: Math.round(width * .80), 
                  height: Math.round(height * .75) 
                })
              });
          
          measure();

          if (liveMeasure) {
              window.addEventListener("resize", measure);

              return () => {
                  window.removeEventListener("resize", measure);
              };
          }
      }
  }, [node]);

  return [svgRef, dimensions, node];
}

