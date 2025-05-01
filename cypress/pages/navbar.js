class Navbar{
    selectorsList() {
        const selectors = {
            adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
            pimButton: '[href="/web/index.php/pim/viewPimModule"]',
            leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
            timeButton: '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            dashboardButton: '[href="/web/index.php/dashboard/index"]',
            directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            maintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
            buzzButton: '[href="/web/index.php/buzz/viewBuzz"]'
        }
        return selectors
    }
    
    adminButton() {
        cy.get(this.selectorsList().adminButton).click()
    }

    pimButton() {
        cy.get(this.selectorsList().pimButton).click()
    }

    leaveButton() {
        cy.get(this.selectorsList().leaveButton).click()
    }

    timeButton() {
        cy.get(this.selectorsList().timeButton).click()
    }

    recruitmentButton() {
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    myInfoButton() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    performanceButton() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    dashboardButton() {
        cy.get(this.selectorsList().dashboardButton).click()
    }

    directoryButton() {
        cy.get(this.selectorsList().directoryButton).click()
    }

    maintenanceButton() {
        cy.get(this.selectorsList().maintenanceButton).click()
    }

    claimButton() {
        cy.get(this.selectorsList().claimButton).click()
    }

    buzzButton() {
        cy.get(this.selectorsList().buzzButton).click()
    }
}

export default Navbar