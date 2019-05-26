import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormControl } from "@angular/forms";
import { FormService } from "../Services/form.service";
@Component({
  selector: "app-form-edit",
  templateUrl: "./form-edit.component.html",
  styleUrls: ["./form-edit.component.css"]
})
export class FormEditComponent implements OnInit {
  closeResult: string;
  @Output() valueChange = new EventEmitter();
  tag = new FormControl("");
  value;
  constructor(private modalService: NgbModal, private ser: FormService) {}

  open(content) {
    this.value = this.ser.LoadLocalStorage();
    this.tag.setValue(this.value);
    const modalRef = this.modalService.open(content);
    modalRef.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  save(s) {
    let change = this.ser.EditForm(s.value);
    this.valueChange.emit(change);
  }
  ngOnInit() {}
}
