import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const OrderForm = ({
  percentageChange,
  transactionIconUrls,
  carPriceTransactionAmount,
  dataLabels,
  iconImageUrl,
  transactionLabel,
  propTop,
  propLeft,
  propColor,
  propLeft1,
}) => {
  const orderStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const iconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <div
      style={{
        position: "absolute",
        top: "226px",
        left: "0px",
        width: "166px",
        height: "180px",
        textAlign: "left",
        fontSize: "13px",
        color: "#cb3117",
        fontFamily: "'Public Sans'",
        ...orderStyle,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "166px",
          height: "180px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "0%",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                borderRadius: "8px",
                backgroundColor: "#2a2c38",
                boxShadow: "0px 2px 6px #435971",
                opacity: "0.12",
                mixBlendMode: "normal",
              }}
            />
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0px",
                bottom: "0%",
                left: "0px",
                borderRadius: "8px",
                backgroundColor: "#2a2c38",
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "17px",
            left: "37px",
            lineHeight: "20px",
            textTransform: "uppercase",
            fontWeight: "500",
            ...titleStyle,
          }}
        >
          {percentageChange}
        </div>
        <img
          style={{
            position: "absolute",
            bottom: "22px",
            left: "21px",
            width: "10px",
            height: "10px",
            objectFit: "cover",
          }}
          alt=""
          src={transactionIconUrls}
        />
        <i
          style={{
            position: "absolute",
            bottom: "45.8px",
            left: "21px",
            fontSize: "22px",
            lineHeight: "30.8px",
            fontWeight: "100",
            color: "#8494a5",
          }}
        >
          {carPriceTransactionAmount}
        </i>
        <div
          style={{
            position: "absolute",
            bottom: "79px",
            left: "21px",
            fontSize: "15px",
            lineHeight: "23px",
            fontWeight: "600",
            color: "#768392",
          }}
        >
          {dataLabels}
        </div>
        <img
          alt=""
          src={iconImageUrl}
          style={{
            position: "absolute",
            top: "calc(50% - 70px)",
            left: "calc(50% + 54.69px)",
            width: "3.5px",
            height: "14px",
            objectFit: "cover",
            ...iconStyle,
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "20px",
            left: "21px",
            width: "42px",
            height: "42px",
            overflow: "hidden",
            objectFit: "cover",
          }}
          alt=""
          src={transactionLabel}
        />
      </div>
    </div>
  );
};

export default OrderForm;
