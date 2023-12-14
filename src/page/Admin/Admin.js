import React from "react";
import DashboardMenuContainer from "./components/dashboard-menu-container";
import NavigationContainer from "./components/navigation-container";
import BalanceContainer from "./components/balance-container";
import FinanceSummaryCard from "./components/finance-summary-card";
import AwesomeContainer from "./components/awesome-container";
import OrderForm from "./components/order-form";
import GrowthCardContainer from "./components/growth-card-container";
import GrowthCardContainer2 from "./components/growth-card-container2";
import CardContainer from "./components/card-container";
import CardPriceContainer from "./components/card-price-container";
import GrowthCardContainer1 from "./components/growth-card-container1";

const AdminDashboard = () => {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "40px",
        backgroundColor: "#232628",
        width: "100%",
        height: "1704px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "15px",
        color: "#768392",
        fontFamily: "'Public Sans'",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "#14141e",
          width: "1440px",
          height: "1704px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "1440px",
          height: "1704px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1652px",
            left: "260px",
            width: "1180px",
            height: "52px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "1180px",
              height: "52px",
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
                backgroundColor: "#2a2c38",
                opacity: "0",
                mixBlendMode: "normal",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "15px",
                right: "27px",
                lineHeight: "23px",
                whiteSpace: "pre-wrap",
              }}
            >
              Upgrade More Themes Support Contact
            </div>
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "26px",
                width: "164px",
                height: "27px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "280px",
            height: "1704px",
            overflow: "hidden",
          }}
        >
          <DashboardMenuContainer />
        </div>
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "286px",
            width: "1128px",
            height: "62px",
          }}
        >
          <NavigationContainer />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "286px",
          width: "1128px",
          height: "1526px",
          textAlign: "center",
          fontSize: "13px",
          color: "#fff",
        }}
      >
        <BalanceContainer />
        <div
          style={{
            position: "absolute",
            top: "638px",
            left: "0px",
            width: "743px",
            height: "416px",
          }}
        >
          <FinanceSummaryCard />
        </div>
        <div
          style={{
            position: "absolute",
            top: "638px",
            left: "770px",
            width: "358px",
            height: "416px",
          }}
        >
          <AwesomeContainer />
          <div
            style={{
              position: "absolute",
              top: "353.6px",
              left: "78.22px",
              width: "203px",
              height: "37px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "203px",
                height: "37px",
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
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: "0%",
                    right: "0px",
                    bottom: "0%",
                    left: "0px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      height: "98.38%",
                      width: "99.98%",
                      top: "0%",
                      right: "0.02%",
                      bottom: "1.62%",
                      left: "0%",
                      borderRadius: "4px",
                      backgroundColor: "#2a2c38",
                      boxShadow: "0px 2px 4px #696cff",
                      opacity: "0.4",
                      mixBlendMode: "normal",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      height: "98.38%",
                      width: "calc(100% - 0.04px)",
                      top: "0%",
                      right: "0.04px",
                      bottom: "1.62%",
                      left: "0px",
                      borderRadius: "4px",
                      backgroundColor: "#0db145",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 8.45px)",
                  left: "23.68%",
                  letterSpacing: "0.43px",
                }}
              >
                View my Account
              </div>
            </div>
          </div>
        </div>
        <OrderForm
          percentageChange="-13.24%"
          transactionIconUrls="/icon@2x.png"
          carPriceTransactionAmount="$1,286"
          dataLabels="Order"
          iconImageUrl="/icon@2x.png"
          transactionLabel="/transactionsicon@2x.png"
          propTop="226px"
          propLeft="0px"
          propColor="#cb3117"
          propLeft1="calc(50% + 54.69px)"
        />
        <div
          style={{
            position: "absolute",
            top: "226px",
            left: "192px",
            width: "166px",
            height: "180px",
          }}
        >
          <GrowthCardContainer />
        </div>
        <div
          style={{
            position: "absolute",
            top: "432px",
            left: "0px",
            width: "166px",
            height: "180px",
          }}
        >
          <GrowthCardContainer2 />
        </div>
        <OrderForm
          percentageChange="+28.14%"
          transactionIconUrls="/icon@2x.png"
          carPriceTransactionAmount="$14,854"
          dataLabels="Transactions"
          iconImageUrl="/icon@2x.png"
          transactionLabel="/transactionsicon@2x.png"
          propTop="432px"
          propLeft="192px"
          propColor="#61b733"
          propLeft1="calc(50% + 58.18px)"
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "385px",
            width: "358px",
            height: "612px",
          }}
        >
          <CardContainer />
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "770px",
            width: "358px",
            height: "612px",
          }}
        >
          <CardPriceContainer />
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "358px",
            height: "202px",
            overflow: "hidden",
          }}
        >
          <GrowthCardContainer1 />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
