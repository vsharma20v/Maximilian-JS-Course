import { Modal } from "./UI/Modal";
import { Map } from "./UI/Map";
import { getCoordsFromAddress, getAddressFromCoords } from "./Utility/Location";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");
    this.shareBtn = document.getElementById("share-btn");

    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
    this.shareBtn.addEventListener("click", this.sharePlaceHandler);
    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
  }

  sharePlaceHandler() {
    const sharedLinkedInputElement = document.getElementById("share-link");
    sharedLinkedInputElement.select();
    if (!navigator.clipboard) {
      return;
    }
    navigator.clipboard
      .writeText(sharedLinkedInputElement.value)
      .then(() => {
        alert("Copied into clipboard!");
      })
      .catch((err) => {
        console.log(err);
        sharedLinkedInputElement.select();
      });
  }

  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }

    fetch("http://localhost:3000/add-location", {
      method: "POST",
      body: JSON.stringify({
        address: address,
        lat: coordinates.lat,
        lng: coordinates.lng,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const locationId=data.locId;
        this.shareBtn.disabled = false;
        const sharedLinkedInputElement = document.getElementById("share-link");
        sharedLinkedInputElement.value = `${
          location.origin
        }/my-place?location=${locationId}`;
      });
  }

  locateUserHandler(e) {
    if (!navigator.geolocation) {
      alert(
        "location feature is not available in your browser - please use a more modern browser or manually enter an address."
      );
      return;
    }

    const modal = new Modal(
      "loading-modal-content",
      "Loading location - please wait!"
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      async (sucessResult) => {
        const coordinates = {
          lat: sucessResult.coords.latitude,
          lng: sucessResult.coords.longitude,
        };
        // console.log(coordinates);
        const address = await getAddressFromCoords(coordinates);
        this.selectPlace(coordinates, address);
        modal.hide();
      },
      (error) => {
        modal.hide();
        alert(
          "Could not locate you unfortunately. Please enter an address manually!"
        );
      }
    );
  }

  async findAddressHandler(e) {
    e.preventDefault();
    const address = event.target.querySelector("input").value.trim();
    if (!address || address.length === 0) {
      alert("Invalid address entered - please try again!");
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "Loading location - please wait!"
    );
    modal.show();

    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch (err) {
      throw new Error(err.message);
    }

    modal.hide();
  }
}

const placeFinder = new PlaceFinder();
