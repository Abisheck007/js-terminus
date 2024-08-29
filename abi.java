@Controller
public class AttendanceController {

    @GetMapping("/attendance")
    public String showAttendancePage(Model model) {
        model.addAttribute("attendanceList", attendanceService.getAllAttendance());
        return "attendance";
    }
}
