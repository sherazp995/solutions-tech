import React, { useEffect, useState, useRef } from "react";

const Counter = (props: any) => {
  let { target, duration, reset } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!reset) return;

    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    let totalMilSecDur = parseInt(duration) * 1000;
    let incrementTime = totalMilSecDur / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => {
      clearInterval(timer);
      setCount(0); // Reset the count when the component is out of view
    };
  }, [target, duration, reset]);

  return <span>{count}</span>;
};

const FunFactSection = (props: any) => {
  let { facts } = props;
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this value based on when you want to trigger the animation
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="design-grid funfact-section py-12 bg-white"
    >
      <div className="col-span-12 col-start-1">
        <div className="flex flex-wrap -mx-4">
          {facts.map((fact: any, index: number) => (
            <div key={index} className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
              <div className="item text-center">
                <h3>
                  <span>
                    <Counter
                      target={fact.target}
                      duration={fact.duration}
                      reset={inView}
                    />
                  </span>
                  {fact.suffix}
                </h3>
                <h4 className="text-gray-500">{fact.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactSection;
