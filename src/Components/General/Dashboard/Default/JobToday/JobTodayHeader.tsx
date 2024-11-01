import { JobTodayHeading } from "@/Constant";
import React from "react";
import { CardHeader } from "reactstrap";

export const JobTodayHeader = () => {
    return (
        <CardHeader className="pb-0 card-no-border">
            <div className="header-top">
                <h3>{JobTodayHeading}</h3>
                <div>
                    <p>
                        Wednesday 6, <span>Dec 2022</span>
                    </p>
                </div>
            </div>
        </CardHeader>
    );
};
