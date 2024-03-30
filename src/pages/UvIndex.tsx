import { PieChart, Pie, Cell } from "recharts";
import DataUseCurrent from "../data/DataUseCurrent";

function UvIndex() {
  const dataUV = DataUseCurrent();
  const RADIAN = Math.PI / 180;
  const data = [
    { name: "A", value: 6, color: "#20FC8F" },
    { name: "B", value: 5, color: "#1C7293" },
    { name: "C", value: 2, color: "#B20D30" },
  ];
  const cx = 99;
  const cy = 70;
  const iR = 35;
  const oR = 65;
  const value = dataUV?.current.uv;

  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={color}
      />,
    ];
  };
  return (
    <>
      <div>
        <PieChart width={180} height={170}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, data, cx, cy, iR, oR, "#d0d000")}
        </PieChart>
      </div>
    </>
  );
}

export default UvIndex;
