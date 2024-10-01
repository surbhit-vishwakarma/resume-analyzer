package com.surbhit.resume_analyzer.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/*
@Author - Surbhit Vishwakarma
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PDFUploadRequest {
//    Metadata
//    Current field you are applying for
    private String field;

//    Organisation that you are trying to go to
    private String org;

//    your year of experience
    private String yoe;

//    Required yoe
    private String rYoe;

    public String getYoe() {
        return yoe;
    }

    public void setYoe(String yoe) {
        this.yoe = yoe;
    }

    public String getrYoe() {
        return rYoe;
    }

    public void setrYoe(String rYoe) {
        this.rYoe = rYoe;
    }

    public String getOrg() {
        return org;
    }

    public void setOrg(String org) {
        this.org = org;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }
}
